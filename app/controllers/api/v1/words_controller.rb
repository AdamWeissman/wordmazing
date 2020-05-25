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
    @letters_all = @user.letters.all
    @letters_cycling = @letters_all.map {|i| i if i.cycle_now == true}.compact
    @words_all = @user.words.all
    @words_cycling = @words_all.map {|i| i if i.cycle_now == true}.compact

      def under_a_certain_score(the_words) #assuming cycle_now is true
        if (the_words.map {|i| i if i.the_word_score <= 3}).compact.length >= 2 #more than 2 words with a score less than 3
          these_ones = the_words.map {|i| i if i.the_word_score <= 3}
          return these_ones.compact.shuffle[0..1]
        elsif (the_words.map {|i| i if i.the_word_score <= 3}).compact.length == 1 #only word 1 with a score less than 3
          these_ones = (the_words.map {|i| i if i.the_word_score <= 3}).compact #necessarily ONE word with a score less than or equal to three
          if (the_words.map {|i| i if i.the_word_score > 3 }).compact.length >= 1 #this is triggered if the reason is the other words are cycled out
            some_old_words = (the_words.map {|i| i if i.the_word_score > 3 }).compact
            a_random_word = some_old_words.shuffle[0]
            these_ones << a_random_word
            return these_ones.compact.shuffle[0..1]
          else
            some_other_words = (@words_all.map {|i| i if i.cycle_now == false }).compact
            a_random_word = some_other_words.shuffle[0]
            these_ones << a_random_word
            return these_ones.compact.shuffle[0..1]
          end
        else #(the_letters.map {|i| i if i.the_letter_score <= 3}).compact.empty
          return ["THEEND"]
        end
      end  

    #NEED TO ALSO CHECK IF CYCLE_NOW is true for any words... if so, that word should enter rotation before all letters are finished, and be paired with a random word
    #(need a redirect to words index which will mimic under a certain score) 
    @words = under_a_certain_score(@words_cycling)

    #IT SHOULD NOT EXIT TO "THEEND" UNLESS THERE ARE ALSO NO LETTERS... 
    #SO BEFORE RETURNING "THEEND" IT SHOULD CHECK IF THERE ARE STILL LETTERS IN ROTATION
    #IF THER ARE LETTERS STILL IN ROTATION, THEN IT SHOULD SEND LETTERS BACK FROM THIS CONTROLLER

    if (@words[0] == "THEEND") && (@letters_cycling.empty?)#destroy user and display congratulations
      @everything = {}
      @everything[:words] = [{the_word: "RESET!!!"}, {the_word: "RESET!!!"}]
      render json: @everything
    elsif (@words[0] == "THEEND") && (!@letters_cycling.empty?)#destroy user and display congratulations
      redirect_to "/api/v1/users/#{@user.id}/letters/"
    else
      @everything = {}
      @everything[:words] = @words
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
    if word.the_word_score == 3 
      #word.the_word_score = word.the_word_score
      word.cycle_now = false
      word.the_word_score +=1
      word.save
    elsif word.the_word_score == 4
      word.the_word_score = word.the_word_score
      word.cycle_now = false
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