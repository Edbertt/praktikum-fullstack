json.extract! transaksi, :id, :kode_faktur ,:tanggal ,:created_at, :updated_at
json.url transaksi_url(transaksi, format: :json)
