module WordActivationUpdater
  def update_word_activation_scores(those_word_ids, that_letter_to_change, that_letter_score, the_user)
    those_word_ids.each do |x|
      word_to_change = the_user.words.find_by_id(x)
      reference_word = word_to_change.the_word
      #get the indexes for each letter that matches that_letter_to_change
      activation_switch = word_to_change.word_activation_switch
    end
  end
end