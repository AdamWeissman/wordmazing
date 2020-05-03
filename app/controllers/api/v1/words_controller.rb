class WordsController < Api::V1::MasterController

  def index
    user = @User #pseudocode
    @words = user.Word.all
    render json: @words
  
end