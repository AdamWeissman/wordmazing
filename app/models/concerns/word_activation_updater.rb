module WordActivationUpdater
  
  def update_word_activation_scores(those_word_ids, that_letter_to_change, that_letter_score, the_user)
    those_word_ids.each do |x|
      word_to_change = the_user.words.find_by_id(x)
      reference_word = word_to_change.the_word
      activation_switch = word_to_change.word_activation_switch
      activation_update(reference_word, activation_switch, that_letter_to_change, that_letter_score.to_s, word_to_change)
      word_to_change.save
    end
  end

  def activation_update(word, activator, letter, letter_score, word_object)
    letter_array = word.split("")
    activator_array = activator.split("")
  
    activation_update_locations = []
    letter_array.each_with_index do |l, index|
      if l == letter
        activation_update_locations << index
      else
        next
      end
    end
  
    activation_key_update = []
    activator_array.each_with_index do |l, index|
      if activation_update_locations.include?(index) 
        activation_key_update << letter_score
      else
        activation_key_update << l
      end    
    end
  
    activation_key_update = activation_key_update.join.to_s
    word_object.word_activation_switch = activation_key_update
    word_object.save
    #binding.pry
    if word_object.cycle_now == true
       #do nothing 
    else 
      if word_object.word_activation_switch.match?(/4{#{word_object.word_activation_switch.length.to_i}}/)
        word_object.cycle_now = true
        word_object.save
      else
        word_object.cycle_now = false
        word_object.save
      end
    end
    
  end

end