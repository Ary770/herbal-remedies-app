class HerbSerializer < ActiveModel::Serializer
  attributes :id, :name, :medicinal_uses, :properties, :preparation, :likes
  # has_many :medicinal_uses, serializer: MedicinalUseSerializer
  # has_many :properties, serializer: PropertySerializer

  def medicinal_uses
    self.object.medicinal_uses.map{|mu| mu.name}.join(', ')
  end

  def properties
    self.object.properties.map{|p| p.name}.join(', ')
  end

end
