json.extract! detail_transaksi, :id, :kode_faktur, :kode_barang, :qty, :total_harga ,:created_at, :updated_at
json.url detail_transaksi_url(detail_transaksi, format: :json)
