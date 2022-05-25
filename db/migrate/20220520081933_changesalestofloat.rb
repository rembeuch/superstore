class Changesalestofloat < ActiveRecord::Migration[7.0]
  def change
    change_column :data, :sales, :float
  end
end
