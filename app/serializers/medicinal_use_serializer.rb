class MedicinalUseSerializer < ActiveModel::Serializer
  attributes :id, :name, :herbs
  # has_many :herbs, serializer: HerbMedicinalUseSerializer

  def herbs
    self.object.herbs.map {|h| h.name }.join(', ')
  end
end
