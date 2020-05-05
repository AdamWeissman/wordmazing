class Api::V1::LettersController < ApplicationController

  def update
    letter = Letter.find(letter_params)
    letter.save
  end

  private

  def letter_params
    params.require(:letter).permit(:the_letter, :the_letter_score, :user_id, :cycle_now) 
  end
  
end