class CreateWordletters < ActiveRecord::Migration[6.0]
  def change
    create_table :wordletters do |t|
      t.references :user
      t.references :word
      t.references :letter

    
    end
  end
end
