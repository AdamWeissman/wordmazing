class CreateSpokenmessages < ActiveRecord::Migration[6.0]
  def change
    create_table :spokenmessages do |t|
      t.string :message
      t.string :category

      t.timestamps
    end
  end
end
