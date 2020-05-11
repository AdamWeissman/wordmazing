class Api::V1::WordsController < ApplicationController

  def create
    params.permit!
    #@user = User.find_by ... this line is incomplete
    word = Words.new(word_params)
    if word.save
      render json: word
    else
      render json: {errors: word.errors.full_messages}, status: :unprocessible_entity
    end
  end

  def update
    word = Word.find(word_params)
    word.save
    render json: word
  end

  private

  def word_params
    params.require(:word).permit(:the_word, :word_activation_switch, :the_word_score, :user_id, :cycle_now) 
  end
  
end