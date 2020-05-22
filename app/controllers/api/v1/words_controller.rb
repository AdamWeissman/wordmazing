class Api::V1::WordsController < ApplicationController

  def create
    params.permit!
    @user = User.find(params[:user_id])
    word = Word.new(word_params)
    word.user_id = @user.id
    word.the_word_score = 0
    word.word_activation_switch = word.make_activation_switch(word.the_word)
    if word.save
      word.make_letters
      render json: word
    else
      render json: {errors: word.errors.full_messages}, status: :unprocessible_entity
    end
  end

  def index
    @user = User.find(params[:user_id])
    @words = @user.words.all

      def under_a_certain_score(the_words)
        if (the_words.map {|i| i if i.the_word_score <= 3}).compact.length >= 2
          these_ones = the_words.map {|i| i if i.the_word_score <= 3}
          return these_ones.compact.shuffle[0..1]
        elsif (the_words.map {|i| i if i.the_word_score <= 3}).compact.length == 1
          these_ones = (the_words.map {|i| i if i.the_word_score <= 3}).compact  
          some_old_words = (the_words.map {|i| i if i.the_word_score > 3 }).compact
          a_random_word = some_old_words.shuffle[0]
          these_ones << a_random_word
          return these_ones.compact.shuffle[0..1]
        else #(the_letters.map {|i| i if i.the_letter_score <= 3}).compact.empty
          return ["END"]
        end
      end  

    #NEED TO ALSO CHECK IF CYCLE_NOW is true for any words... if so, that word should enter rotation before all letters are finished, and be paired with a random word
    #(need a redirect to words index which will mimic under a certain score) 
    @words = under_a_certain_score(@words)
    if @words[0] == "END" #destroy user and display congratulations
      redirect_to "api/v1/users#destroy" #redirect to completion page
    else
      @everything = {}
      @everything[:words] = @words
      #@everything[:letters] = @letters
      #if cycle_now (random render... json words OR json letters)
      render json: @everything
    end

  end

  # def grab_words
  #   #this will render two words that have scores LESS than X, can use similar code for scoring from phrase ninja
  # end

  def update
    params.permit!
    user = User.find(params[:user_id])
    word = user.words.find_by_the_word(params[:id])
    if word.the_word_score == 4
      word.the_word_score = word.the_word_score
      word.save
    else
      word.the_word_score += 1
      word.save
    end
  end

  private

  def word_params
    params.require(:word).permit(:the_word, :word_activation_switch, :the_word_score, :cycle_now) 
  end
  
end