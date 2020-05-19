class Api::V1::LettersController < ApplicationController
  include WordActivationUpdater

  def index
    @user = User.find(params[:user_id])
    @letters = @user.letters.all


    def under_a_certain_score(the_letters)
      these_ones = the_letters.map {|i| i if i.the_letter_score < 3}
      if these_ones.size >= 2
        return these_ones.shuffle[0...2]
      elsif these_ones.size == 1
        alphabet = ('A'..'Z').to_a.shuffle
        a_random_letter = alphabet[0] != these_ones.size[0] ? alphabet[0] : alphabet[1]
        random_letter_object = @user.letters.find_or_create_by(user_id: @user.id, the_letter: a_random_letter, the_letter_score: 20)
        these_ones << random_letter_object
        return these_ones.shuffle[0...2]
      else
        alphabet = ('A'..'Z').to_a.shuffle
        a_random_letter = alphabet[0] != these_ones.size[0] ? alphabet[0] : alphabet[1]
        random_letter_object = @user.letters.find_or_create_by(user_id: @user.id, the_letter: a_random_letter, the_letter_score: 20)
        these_ones << random_letter_object
        return these_ones.shuffle[0...2]
      end
    end  


    #NEED TO ALSO CHECK IF CYCLE_NOW is true for any words... if so, that word should enter rotation before all letters are finished, and be paired with a random word
    #(need a redirect to words index which will mimic under a certain score) 
    @letters = under_a_certain_score(@letters)
    
    if @letters != nil
      render json: @letters 
    else
      redirect_to "http://www.rubyonrails.org"
    end
  end

  def update
    params.permit!
    user = User.find(params[:user_id])
    letter = user.letters.find_by_the_letter(params[:id])
    letter.the_letter_score += 1
    letter.save

    temp_array = []
    connector = letter.wordletters.where(letter_id: letter.id).each {|x| temp_array << x}
    word_ids = temp_array.map {|wordletter| wordletter.word_id}
    word_ids.uniq!
    
    update_word_activation_scores(word_ids, letter.the_letter, letter.the_letter_score, user)

  end

  private

  # def letter_params
  #   params.require(:letter).permit(:the_letter, :the_letter_score, :user_id, :cycle_now) 
  # end
  
end