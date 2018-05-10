class Comment < ApplicationRecord
  # multiple ancestry via rails :polymorphic thing is an option too

  # scopes
  def self.forRoom(room)
    sp = room.split('_')
    where(parent_kind: sp[0], parent_id: sp[1])
  end
  # instance methods
  def set_parent(room)
    sp = room.split('_')
    self.parent_kind = sp[0]
    self.parent_id = sp[1]
  end

end
