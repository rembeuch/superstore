class CreateData < ActiveRecord::Migration[7.0]
  def change
    create_table :data do |t|
      t.string :order_id
      t.string :order_date
      t.string :customer_id
      t.string :state
      t.string :product_id
      t.integer :sales

      t.timestamps
    end
  end
end
