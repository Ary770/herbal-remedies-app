class Herb < ApplicationRecord
  has_and_belongs_to_many :medicinal_uses

  def Herb.create_herbs_from_hash(herbs_and_path_hash)
    herbs_and_path_hash.each do |herb, h_path|
      new_herb = self.create
      new_herb.name = herb
      new_herb.path = h_path
      new_herb.save
    end
  end

  def self.create_herbal_remedies
    self.create_herbs_from_hash(Scraper.herb_names_and_path_hash)
  end

  def self.add_herb_attributes
    self.all.each do |herb|
      attributes_hash = Scraper.herb_attributes_hash("https://www.anniesremedy.com/" + herb.path)
      herb.add_herb_attributes(attributes_hash)
    end
  end

  def self.search_by_medicinal_use(condition)
    self.all.select { |herb| herb.medicinal_uses && herb.medicinal_uses.downcase.include?(condition.downcase)}
  end

  def self.search_by_properties(property)
    self.all.select { |herb| herb.properties && herb.properties.downcase.include?(property.downcase)}
  end

  def add_herb_attributes(herb_attributes_hash)
    herb_attributes_hash.each do |key, value|
      binding.pry
      # Instantiate Medicinal Uses and associate them with self herb
      self.send(("#{key}="), value)
    end
    # self.save
  end

  def self.list_medicinal_uses
    all_medicnal_uses = Herb.all.map do |herb|
      if herb.medicinal_uses != nil
        medicinal_use = herb.medicinal_uses.gsub('*', '').strip
      end
    end
    all_medicnal_uses.flatten.uniq.compact
  end

end
