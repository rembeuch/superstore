class DataSerializer
  include FastJsonapi::ObjectSerializer
  attributes :order_id, :order_date, :customer_id, :state, :product_id, :sales
end
