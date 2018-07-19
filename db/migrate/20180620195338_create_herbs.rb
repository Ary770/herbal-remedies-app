class CreateHerbs < ActiveRecord::Migration[5.1]
  def change
    create_table :herbs do |t|
      t.string :name
      t.string :path
      t.string :preparation

      t.timestamps
    end
  end
end
