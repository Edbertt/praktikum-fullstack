require "test_helper"

class TransaksisControllerTest < ActionDispatch::IntegrationTest
  setup do
    @transaksi = transaksis(:one)
  end

  test "should get index" do
    get transaksis_url, as: :json
    assert_response :success
  end

  test "should create transaksi" do
    assert_difference("Transaksi.count") do
      post transaksis_url, params: { transaksi: {} }, as: :json
    end

    assert_response :created
  end

  test "should show transaksi" do
    get transaksi_url(@transaksi), as: :json
    assert_response :success
  end

  test "should update transaksi" do
    patch transaksi_url(@transaksi), params: { transaksi: {} }, as: :json
    assert_response :success
  end

  test "should destroy transaksi" do
    assert_difference("Transaksi.count", -1) do
      delete transaksi_url(@transaksi), as: :json
    end

    assert_response :no_content
  end
end
