class Wordletter < ApplicationRecord
  belongs_to :word
  belongs_to :letter
end
