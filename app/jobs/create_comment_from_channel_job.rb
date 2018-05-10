class CreateCommentFromChannelJob < ApplicationJob
  queue_as :default

  def perform(*args)
    options = args[0]
    room = options[:room]
    comment = Comment.new(options[:comment])
    comment.set_parent(room)
    comment.save!
    #
    ActionCable.server.broadcast("chat_#{room}", comment.to_json)
  end
end
