class User < ApplicationRecord
  has_many :letters, dependent: :destroy
  has_many :words, dependent: :destroy
end
