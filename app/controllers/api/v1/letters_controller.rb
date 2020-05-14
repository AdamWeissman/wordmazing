class Api::V1::LettersController < ApplicationController

  def grab_letters
    #this will render two letters that have scores LESS than X, can use similar code for scoring from phrase ninja
  end

  def update
    letter = Letter.find(letter_params)
    letter.save
  end

  private

  def letter_params
    params.require(:letter).permit(:the_letter, :the_letter_score, :user_id, :cycle_now) 
  end
  
end