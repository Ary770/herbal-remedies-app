class CreateHerbsProperties < ActiveRecord::Migration[5.1]
  def change
    create_table :herbs_properties do |t|
      t.integer :herb_id
      t.integer :property_id
      t.timestamps
    end
  end
end
