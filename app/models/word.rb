class Word < ApplicationRecord
  belongs_to :user
  has_many :wordletters, dependent: :destroy
  has_many :letters, through: :wordletters

  def make_letters
    self.the_word.split(//).each do |letter|
      l = Letter.find_or_create_by(:the_letter => letter, :user_id => self.user_id)
      Wordletter.find_or_create_by(:user_id => user.id, :word_id => self.id, :letter_id => l.id, :the_letter => l.the_letter)
      self.save
    end
  end
end