class CreateDetailTransaksis < ActiveRecord::Migration[8.0]
  def change
    create_table :detail_transaksis do |t|
      t.string :kode_faktur , null: false
      t.string :kode_barang , null: false
      t.integer :qty
      t.integer :total_harga

      t.timestamps
    end

    add_foreign_key :detail_transaksis, :transaksis, column: :kode_faktur, primary_key: :kode_faktur
    add_foreign_key :detail_transaksis, :barangs, column: :kode_barang, primary_key: :kode_barang

    add_index :detail_transaksis, :kode_faktur
    add_index :detail_transaksis, :kode_barang
  end
end
