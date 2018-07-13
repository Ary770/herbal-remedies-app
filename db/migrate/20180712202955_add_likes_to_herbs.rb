class AddLikesToHerbs < ActiveRecord::Migration[5.1]
  def change
    add_column :herbs, :likes, :integer, :default => 0
  end
end
