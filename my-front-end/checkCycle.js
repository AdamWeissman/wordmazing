async function check_cycle_now_func () {
  words_and_or_letters = new Set()
  let x = activeUserID[0];
  const result = await fetch(`${USERS_URL}/${x}/letters`)
  const data = await result.json()
    try {
      const the_letters = await data.letters
      const the_words = await data.words
      the_words.forEach(element => {
        if (element.cycle_now === true) {words_and_or_letters.add("words")}
      }),

      the_letters.forEach(element => {
        if (element.cycle_now === true) {words_and_or_letters.add("letters")}
      });
      
      x = Array.from(words_and_or_letters)
      return x
    }

    catch {            
      try {
        const the_words = await data.words
        the_words.forEach(element => {
        if (element.cycle_now === true) {words_and_or_letters.add("words")}
        });
      
      x = Array.from(words_and_or_letters)
      return x
      }

      catch {
        const the_letters = await data.letters
        the_letters.forEach(element => {
        if (element.cycle_now === true) {words_and_or_letters.add("letters")}
        });
        
        x = Array.from(words_and_or_letters)
        return x
      }
    }

}