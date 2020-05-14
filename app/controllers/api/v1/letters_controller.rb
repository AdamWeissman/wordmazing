class Api::V1::LettersController < ApplicationController

  def index
    @user = User.find(params[:user_id])
    @letters = @user.letters.all

    def under_a_certain_score(the_letters)
      these_ones = the_letters.map {|i| i if i.the_letter_score < 10}
      return these_ones.shuffle[0...2]
    end  

    @letters = under_a_certain_score(@letters)
    render json: @letters
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