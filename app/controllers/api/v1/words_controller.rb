class WordsController < Api::V1::MasterController

  def create
    word = Words.new(word_params)
  end

  def update
    word = Word.find(word_params)
    word.save
  end

  private

  def word_params
    params.require(:word).permit(:the_word, :word_activation_switch, :the_word_score, :user_id, :cycle_now) 
  end
  
end