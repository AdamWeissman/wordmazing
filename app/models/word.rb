class Word < ApplicationRecord
  belongs_to :user
  has_many :wordletters, dependent: :destroy
  has_many :letters, through: :wordletters

  def make_activation_switch(word)
    x = word.length
    return "0" * x
  end

  def make_letters
    self.the_word.split(//).each do |letter|
      l = Letter.find_or_create_by(:the_letter => letter, :user_id => self.user_id, :the_letter_score => 0)
      wl = Wordletter.create(:user_id => self.user_id, :word_id => self.id, :letter_id => l.id, :the_letter => l.the_letter)
      self.save
    end
  end

end