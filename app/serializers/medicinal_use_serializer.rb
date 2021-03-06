class MedicinalUseSerializer < ActiveModel::Serializer
  attributes :id, :name
  # To see all nested herbs under each medicinalUse.
  has_many :herbs, serializer: NestedHerbsSerializer

  # def herbs
  #   self.object.herbs.map {|h| h.name }
  # end
end
