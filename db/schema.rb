# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_05_01_034401) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "letters", force: :cascade do |t|
    t.string "the_letter"
    t.integer "the_letter_score"
    t.boolean "cycle_now", default: true
    t.bigint "user_id"
    t.bigint "word_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_letters_on_user_id"
    t.index ["word_id"], name: "index_letters_on_word_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "wordletters", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "letter_id"
    t.index ["letter_id"], name: "index_wordletters_on_letter_id"
    t.index ["user_id"], name: "index_wordletters_on_user_id"
  end

  create_table "words", force: :cascade do |t|
    t.string "the_word"
    t.string "word_activation_switch"
    t.integer "the_word_score"
    t.boolean "cycle_now", default: false
    t.bigint "user_id"
    t.bigint "letter_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["letter_id"], name: "index_words_on_letter_id"
    t.index ["user_id"], name: "index_words_on_user_id"
  end

end
