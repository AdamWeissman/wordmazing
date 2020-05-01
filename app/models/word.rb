class Word < ApplicationRecord
  belongs_to :user
  has_many :wordletters
  has_many :letters, through: :wordletters

  def self.make_letters
    self.the_word.split(//).each do |letter|
      l = Letter.find_or_create_by(:the_letter => letter)
      Wordletter.find_or_create_by(:user_id => user.id, :word_id => word.id, :letter_id => l.id)
    end
  end
endex