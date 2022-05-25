require "test_helper"

class DataTest < ActiveSupport::TestCase
  test "state returns the state of the data order row" do
    order = Data.new(order_id:  "CA-2016-152156",
    order_date: "11/8/2016",
    customer_id: "CG-12520",
    state: "Kentucky",
    product_id: "FUR-BO-10001798",
    sales: 261.96)
    
    assert_equal "Kentucky", order.state
  end

  test "sales returns the sales of the data order row" do
    order = Data.new(order_id:  "CA-2016-152156",
    order_date: "11/8/2016",
    customer_id: "CG-12520",
    state: "Kentucky",
    product_id: "FUR-BO-10001798",
    sales: 261.96)
    
    assert_equal 261.96, order.sales
  end

  test "order_date returns the date of the data order row" do
    order = Data.new(order_id:  "CA-2016-152156",
    order_date: "11/8/2016",
    customer_id: "CG-12520",
    state: "Kentucky",
    product_id: "FUR-BO-10001798",
    sales: 261.96)
    
    assert_equal "11/8/2016", order.order_date
  end

end
