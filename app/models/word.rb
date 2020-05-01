class Word < ApplicationRecord
  belongs_to :user
  has_many :wordletters
  has_many :letters, through :wordletters
end
