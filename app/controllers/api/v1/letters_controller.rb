class Api::V1::LettersController < ApplicationController
  include WordActivationUpdater

  def index
    @user = User.find(params[:user_id])
    @those_letters = @user.letters.all
    @words = @user.words.all

      def under_a_certain_score(the_letters)
        these_ones = the_letters.map {|i| (i.the_letter_score <= 3 ) ? i : next}
        if these_ones.length >= 2
          return these_ones.shuffle[0...2]
        elsif these_ones.length == 1
          some_old_letters = the_letters.map {|i| (i.the_letter_score > 3 ) ? i : next}
          a_random_letter = (some_old_letters[0] != these_ones.size[0]) ? some_old_letters[0] : some_old_letters[1]
          binding.pry
          these_ones << a_random_letter
          return these_ones.shuffle[0...2]
        else these_ones.length == 0
          return "WORD TIME"
        end
      end  

    #NEED TO ALSO CHECK IF CYCLE_NOW is true for any words... if so, that word should enter rotation before all letters are finished, and be paired with a random word
    #(need a redirect to words index which will mimic under a certain score) 
    
    @letters = under_a_certain_score(@those_letters)

    @everything = {}
    @everything[:words] = @words
    @everything[:letters] = @letters
    render json: @everything

  end

  def update
    params.permit!
    user = User.find(params[:user_id])
    letter = user.letters.find_by_the_letter(params[:id])
    letter.the_letter_score += 1
    letter.save

    # if letter.the_letter_score == 2 #this is just to test... when characters are cycled out that's when errors begin
    #   #alphabet = ('a'..'z').to_a.shuffle
    #   #a_random_letter = alphabet[0] != letter.the_letter ? alphabet[0] : alphabet[1]
    #   random_letter_object = user.letters.find_or_create_by(user_id: user.id, the_letter: "YOU DID IT", the_letter_score: 0)
    #   random_letter_object.save
    # end


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


# if these_ones.size < 2
        #   alphabet = ('A'..'Z').to_a.shuffle
        #   a_random_letter = alphabet[0] != these_ones.size[0] ? alphabet[0] : alphabet[1]
        #   random_letter_object = @user.letters.find_or_create_by(user_id: @user.id, the_letter: a_random_letter.to_s, the_letter_score: 9)
        #   random_letter_object.save
        #   #binding.pry
        #   these_ones << random_letter_object
        #   return these_ones.shuffle[0...2]  
        # else  