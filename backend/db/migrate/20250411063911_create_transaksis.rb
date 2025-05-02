class CreateTransaksis < ActiveRecord::Migration[8.0]
  def change
    create_table :transaksis do |t|
      t.string :kode_faktur, null: false
      t.date :tanggal
      t.timestamps
    end

    add_index :transaksis, :kode_faktur, unique: true
  end
end
