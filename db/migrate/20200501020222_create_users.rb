class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      
      t.boolean :admin, default: false
      t.string :admin_name, unique: true
      t.string :password_digest #this is really for the admin only

      t.timestamps
    end
    add_index :users, :admin_name, :unique => true
  end
end
