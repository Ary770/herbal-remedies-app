class CreateHerbsMedicinalUses < ActiveRecord::Migration[5.1]
  def change
    create_table :herbs_medicinal_uses do |t|
      t.integer :herb_id
      t.integer :medicinal_use_id
      t.timestamps
    end
  end
end
