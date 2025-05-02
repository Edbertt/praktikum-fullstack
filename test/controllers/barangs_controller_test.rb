require "test_helper"

class BarangsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @barang = barangs(:one)
  end

  test "should get index" do
    get barangs_url, as: :json
    assert_response :success
  end

  test "should create barang" do
    assert_difference("Barang.count") do
      post barangs_url, params: { barang: {} }, as: :json
    end

    assert_response :created
  end

  test "should show barang" do
    get barang_url(@barang), as: :json
    assert_response :success
  end

  test "should update barang" do
    patch barang_url(@barang), params: { barang: {} }, as: :json
    assert_response :success
  end

  test "should destroy barang" do
    assert_difference("Barang.count", -1) do
      delete barang_url(@barang), as: :json
    end

    assert_response :no_content
  end
end
