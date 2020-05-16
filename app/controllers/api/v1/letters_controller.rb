class Api::V1::LettersController < ApplicationController

  def index
    @user = User.find(params[:user_id])
    @letters = @user.letters.all

    def under_a_certain_score(the_letters)
      these_ones = the_letters.map {|i| i if i.the_letter_score < 10}
      return these_ones.shuffle[0...2] #NEED TO ALSO ACCOUNT FOR A SITUATION WHERE THERE IS ONLY 1 LETTER TO CHOOSE FROM
      #IN OTHER WORDS: IF THERE IS ONLY ONE LETTER, THEN THAT SINGLE CORRECT LETTER WILL KEEP APPEARING ALONG WITH SOME RANDOM THAT'S BEEN SCORED OUT
    end  

    @letters = under_a_certain_score(@letters)
    render json: @letters
  end

  def update
    binding.pry
    params.permit!
    user = User.find(params[:user_id])
    letter = user.letters.find_by_the_letter(params[:id])
    letter.the_letter_score += 1
    letter.save
    #letter = Letter.find(the correct letter)
    #update the LETTER score by 1
    #ALSO UPDATE THE ACTIVATION SWITCH ON THE WORD (WILL NEED TO GO THROUGH THE WORDLETTER TABLE)
    #letter.save
    #this update should select the correct 
  end

  private

  # def letter_params
  #   params.require(:letter).permit(:the_letter, :the_letter_score, :user_id, :cycle_now) 
  # end
  
end