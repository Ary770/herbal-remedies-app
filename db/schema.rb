# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180724174305) do

  create_table "herbs", force: :cascade do |t|
    t.string "name"
    t.string "path"
    t.string "preparation"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "likes", default: 0
  end

  create_table "herbs_medicinal_uses", force: :cascade do |t|
    t.integer "herb_id"
    t.integer "medicinal_use_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["medicinal_use_id", "herb_id"], name: "by_medicinal_use_and_herb", unique: true
  end

  create_table "herbs_properties", force: :cascade do |t|
    t.integer "herb_id"
    t.integer "property_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["property_id", "herb_id"], name: "by_property_and_herb", unique: true
  end

  create_table "medicinal_uses", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "properties", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
