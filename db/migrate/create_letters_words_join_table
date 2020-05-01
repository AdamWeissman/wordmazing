class CreateLettersWordsJoinTable < ActiveRecord::Migration[6.0]
  def change
    create_join_table :letters, :words do |t|
      t.index :letter_id
      t.index :word_id
    end
  end
end
