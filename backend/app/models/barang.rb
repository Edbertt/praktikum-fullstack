class Barang < ApplicationRecord
    validates :kode_barang, presence: true, uniqueness: true
    validates :nama_barang, presence: true
    validates :harga, presence: true, numericality: { greater_than_or_equal_to: 0 }

    has_many :detail_transaksis, foreign_key: :kode_barang, primary_key: :kode_barang
end
