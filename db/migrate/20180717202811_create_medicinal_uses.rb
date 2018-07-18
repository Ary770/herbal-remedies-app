class CreateMedicinalUses < ActiveRecord::Migration[5.1]
  def change
    create_table :medicinal_uses do |t|
      t.string :name
      t.timestamps
    end
  end
end
