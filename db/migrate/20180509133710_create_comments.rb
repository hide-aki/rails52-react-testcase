class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string :author
      t.text :content
      t.integer :parent_id
      t.string :parent_kind

      t.timestamps
    end
  end
end
