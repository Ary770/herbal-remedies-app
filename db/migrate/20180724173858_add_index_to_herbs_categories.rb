class AddIndexToHerbsCategories < ActiveRecord::Migration[5.1]
  def change
    add_index :herbs_properties, [ :property_id, :herb_id ], :unique => true, :name => 'by_property_and_herb'
  end
end
