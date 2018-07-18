require 'nokogiri'
require 'open-uri'

class Scraper < ApplicationRecord
  @@doc_2 = Nokogiri::HTML(open("https://draxe.com/herbal-medicine/"))

  def self.herbal_medicine
    @@doc_2.css('p')[4..7]
  end

  def self.benefits_of_h_m
    @@doc_2.css('p')[8..15]
  end

  def self.bonus
    doc = Nokogiri::HTML(open("https://www.meaningfullife.com/body-and-soul/"))
    doc.css("p")[7..8]
  end

  def self.herb_names_and_path_hash
    doc = Nokogiri::HTML(open("https://www.anniesremedy.com/chart.php"))
    hash = {}
    doc.css('td').css('a').css('.herb').each do |plant|
      hash[plant.text.strip.chomp(',')] = plant.attr('href')
    end
    hash
  end

  def self.herb_attributes_hash(path)
    doc = Nokogiri::HTML(open(path))
    attribute_hash = {}
    medicinal_uses = doc.css('.nobullets').css('li').css('.tag').text
    properties = doc.css('.nobullets').css('li').css('.chartID').text
    if medicinal_uses != ''
      medicinal_uses.slice!('*')
      attribute_hash[:medicinal_uses] = medicinal_uses.gsub('*', ',').strip
    end
    attribute_hash[:properties] = properties if properties != ""
    attribute_hash[:preparation] = doc.css('.physW').text
    attribute_hash[:preparation].gsub!("Preparation Methods & Dosage :", '')
    attribute_hash[:preparation].chomp!('Looking for something you can read offline? Join our mailing list and get a free copy of  Methods for Using Herbs. This free handbook includes instructions on how to make basic herbal preparations at home. It covers making herbal teas, herb infused oils and balms, tinctures, and more.')
    attribute_hash
  end
end
