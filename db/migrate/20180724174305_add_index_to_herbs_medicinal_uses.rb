class AddIndexToHerbsMedicinalUses < ActiveRecord::Migration[5.1]
  def change
    add_index :herbs_medicinal_uses, [ :medicinal_use_id, :herb_id ], :unique => true, :name => 'by_medicinal_use_and_herb'
  end
end
