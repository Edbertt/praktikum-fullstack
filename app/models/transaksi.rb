class Transaksi < ApplicationRecord
    validates :kode_faktur, presence: true, uniqueness: true
    validates :tanggal, presence: true

    has_many :detail_transaksis, foreign_key: :kode_faktur, primary_key: :kode_faktur
end
