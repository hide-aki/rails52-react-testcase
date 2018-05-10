class AddAttachmentToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :attachment, :string
    # add indexes for comments
    add_index :comments, [:parent_id, :parent_kind]
  end
end
