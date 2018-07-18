class HerbSerializer < ActiveModel::Serializer
  attributes :id, :name, :medicinal_uses, :properties, :preparation, :likes
end
