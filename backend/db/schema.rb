# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[8.0].define(version: 2025_04_22_080518) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "pg_catalog.plpgsql"

  create_table "barangs", force: :cascade do |t|
    t.string "kode_barang", null: false
    t.string "nama_barang"
    t.integer "harga"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["kode_barang"], name: "index_barangs_on_kode_barang", unique: true
  end

  create_table "detail_transaksis", force: :cascade do |t|
    t.string "kode_faktur", null: false
    t.string "kode_barang", null: false
    t.integer "qty"
    t.integer "total_harga"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["kode_barang"], name: "index_detail_transaksis_on_kode_barang"
    t.index ["kode_faktur"], name: "index_detail_transaksis_on_kode_faktur"
  end

  create_table "transaksis", force: :cascade do |t|
    t.string "kode_faktur", null: false
    t.date "tanggal"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["kode_faktur"], name: "index_transaksis_on_kode_faktur", unique: true
  end

  add_foreign_key "detail_transaksis", "barangs", column: "kode_barang", primary_key: "kode_barang"
  add_foreign_key "detail_transaksis", "transaksis", column: "kode_faktur", primary_key: "kode_faktur"
end
