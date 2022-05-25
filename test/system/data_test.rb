require "application_system_test_case"

class DataTest < ApplicationSystemTestCase
  test "visiting the homepage" do
    visit root_url
  
    assert_selector "h1", text: "Memory - Superstore"
    assert_equal root_path, page.current_path

  end
end
