class Herb < ApplicationRecord
  has_and_belongs_to_many :medicinal_uses
  has_and_belongs_to_many :properties

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

  def add_herb_attributes(herb_attributes_hash)
    herb_attributes_hash.each do |key, value|
      if key === :medicinal_uses
        # Instantiate Medicinal Uses and associate them with herb instance
        value.each do |medicinal_use|
          if !self.medicinal_uses.find_by(name: medicinal_use.lstrip)
            self.medicinal_uses << MedicinalUse.find_or_create_by({name: medicinal_use.lstrip})
          end
        end
      elsif key === :properties
        value.each do |property|
          if !self.properties.find_by(name: property.lstrip)
            self.properties << Property.find_or_create_by({name: property.lstrip})
          end
        end
      else
        self.send(("#{key}="), value)
      end
    end
    self.save
  end

end
