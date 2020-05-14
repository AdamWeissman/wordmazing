class Api::V1::WordsController < ApplicationController

  def create
    params.permit!
    @user = User.find(params[:user_id])
    word = Word.new(word_params)
    word.user_id = @user.id
    if word.save
      word.make_letters
      render json: word
    else
      render json: {errors: word.errors.full_messages}, status: :unprocessible_entity
    end
  end

  def grab_letters
    #this will render two letters that have scores LESS than X, can use similar code for scoring from phrase ninja
  end

  def update
    word = Word.find(word_params)
    word.save
    render json: word
  end

  private

  def word_params
    params.require(:word).permit(:the_word, :word_activation_switch, :the_word_score, :cycle_now) 
  end
  
end