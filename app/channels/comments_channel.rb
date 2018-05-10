class CommentsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "chat_#{params[:room]}"
  end
 
  def receive(data)
    options = {
      comment: data,
      room: params[:room]
    }
    CreateCommentFromChannelJob.perform_later(options)
  end
end