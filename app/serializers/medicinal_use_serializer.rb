class MedicinalUseSerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :herbs, serializer: HerbMedicinalUseSerializer

  # def herbs
  #   self.object.herbs.map {|h| h.name }
  # end
end
