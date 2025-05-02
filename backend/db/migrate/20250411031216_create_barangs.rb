class CreateBarangs < ActiveRecord::Migration[8.0]
  def change
    create_table :barangs do |t|
      t.string :kode_barang, null: false
      t.string :nama_barang
      t.integer :harga
      t.timestamps
    end

    add_index :barangs, :kode_barang, unique: true
  end
end
