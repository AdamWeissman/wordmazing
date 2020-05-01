class CreateReadymades < ActiveRecord::Migration[6.0]
  def change
    create_table :readymades do |t|
      t.string :word, unique: true
      t.string :letter

      t.timestamps
    end
  end
end
