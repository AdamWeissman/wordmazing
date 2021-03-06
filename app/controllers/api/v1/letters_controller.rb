class Api::V1::LettersController < ApplicationController
  include WordActivationUpdater

  def index
    @user = User.find(params[:user_id])
    @letters = @user.letters.all
    @check_words_to_cycle = @user.words.all
    @words = @check_words_to_cycle.map {|i| i if i.cycle_now == true }.compact
    #may want to rewrite this code so that it will check to see if any word or any letters is marked as cycle now

      def under_a_certain_score(the_letters)
        if (the_letters.map {|i| i if i.the_letter_score <= 3}).compact.length >= 2
          these_ones = the_letters.map {|i| i if i.the_letter_score <= 3}
          return these_ones.compact.shuffle[0..1]
        elsif (the_letters.map {|i| i if i.the_letter_score <= 3}).compact.length == 1
          these_ones = (the_letters.map {|i| i if i.the_letter_score <= 3}).compact  
          some_old_letters = (the_letters.map {|i| i if i.the_letter_score > 3 }).compact
          a_random_letter = some_old_letters.shuffle[0]
          these_ones << a_random_letter
          return these_ones.compact.shuffle[0..1]
        else #(the_letters.map {|i| i if i.the_letter_score <= 3}).compact.empty
          return ["GOTOWORDS"]
        end
      end  

    
    @letters = under_a_certain_score(@letters)
    if (@letters[0] == "GOTOWORDS") && (@words.empty?)
      @everything = {}
      @everything[:words] = [{the_word: "RESET!!!"}, {the_word: "RESET!!!"}]
      render json: @everything
    elsif @letters[0] == "GOTOWORDS"
      redirect_to "/api/v1/users/#{@user.id}/words/"
    else
      @everything = {}
      @everything[:words] = @words
      @everything[:letters] = @letters
      
      render json: @everything
    end

  end

  def update
    params.permit!
    user = User.find(params[:user_id])
    letter = user.letters.find_by_the_letter(params[:id])
    if letter.the_letter_score == 3
      letter.the_letter_score += 1
      letter.cycle_now = false
      letter.save
    elsif letter.the_letter_score > 3
      letter.the_letter_score = letter.the_letter_score
      letter.cycle_now = false
      letter.save
    else
      letter.the_letter_score += 1
      letter.save
    end
    
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