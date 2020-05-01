class Letter < ApplicationRecord
  belongs_to :user
  has_many :wordletters
  has_many :words, through: :wordletters
end
