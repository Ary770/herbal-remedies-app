class CreateMedicinalUses < ActiveRecord::Migration[5.1]
  def change
    create_table :medicinal_uses do |t|
      t.string :text
      t.timestamps
    end
  end
end
