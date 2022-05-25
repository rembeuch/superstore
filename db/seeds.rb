# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'csv'
Data.destroy_all

CSV.foreach(Rails.root.join('db', 'dataset.csv'), headers: true) do |row|

    Data.create( {
            order_id: row['Order ID'],
            order_date: row['Order Date'],
            customer_id: row['Customer ID'],
            state: row['State'],
            product_id: row['Product ID'],
            sales: row['Sales'],
    } )
  end

  puts "There are now #{Data.count} rows in the Data tables"
