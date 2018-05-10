require 'file_size_validator' 

class Post < ApplicationRecord
  belongs_to :category
  mount_uploader :attachment, AttachmentUploader
  validates :attachment, file_size: { minimum: 0.megabytes, maximum: 2.megabytes }
end
