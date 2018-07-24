class PropertySerializer < ActiveModel::Serializer
  attributes :id, :name
  has_many :herbs, serializer: NestedHerbsSerializer
end
