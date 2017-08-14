class CreateSubmissions < ActiveRecord::Migration[5.1]
  def change
    create_table :submissions do |t|
      t.string :name
      t.string :email
      t.string :phone
      t.string :address
      t.string :cat
      t.string :dog
      t.timestamps
    end
  end
end
