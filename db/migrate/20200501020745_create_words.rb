class CreateWords < ActiveRecord::Migration[6.0]
  def change
    create_table :words do |t|
      t.string :the_word
      t.string :word_activation_switch
      t.integer :the_word_score
      t.boolean :cycle_now, default: false

      t.references :user
      t.references :letter

      t.timestamps
    end
  end
end
