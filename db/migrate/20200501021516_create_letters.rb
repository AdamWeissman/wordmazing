class CreateLetters < ActiveRecord::Migration[6.0]
  def change
    create_table :letters do |t|
      t.string :the_letter
      t.integer :the_letter_score
      t.boolean :cycle_now, default: true

      t.timestamps
    end
  end
end