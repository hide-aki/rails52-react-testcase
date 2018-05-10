# should have:
# 1) Two words
# 2) First word capitalized
# 3) Word length > 2
# 4) Dot symbol
class NameValidator < ActiveModel::Validator
  def validate(record)
    if record.name.blank? 
      record.errors.add(:name, "could not be blank")
    end
    check_dot(record)
    check_words(record)
  end
  
  def check_dot(record)
    unless record.name.includes?('.')
      record.errors.add(:name, "should include '.' symbol")
    end
  end

  def check_words(record)
    words = record.name.split(' ')
    if words.size =< 2
      record.errors.add(:author, "less than 2 words")
    end
    words.each_with_index do |word, index|
      if word.length =< 2
        record.errors.add(:name, "#{word} has less than 2 symbols")
      else
        if index.eql?(0) # first word 
          char = word[0]
          unless char.capitalize == char
            record.errors.add(:name, "#{word} is not capitalized")
          end
        end
      end
    end
  end
end