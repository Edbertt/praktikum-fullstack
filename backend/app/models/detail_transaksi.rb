class DetailTransaksi < ApplicationRecord
    belongs_to :barang, foreign_key: :kode_barang, primary_key: :kode_barang
    belongs_to :transaksi, foreign_key: :kode_faktur, primary_key: :kode_faktur
end
