async function random_two_letter_func_v2 () {
  random_two_letters = []
  random_two_words = []
  let x = activeUserID[0];
  //alert("Return Random Two Letters With Low Scores");
 
  try {
  const result = await fetch(`${USERS_URL}/${x}/letters`)
  const data = await result.json()
  const the_letters = await data.letters
  const two_random_letters = await the_letters.forEach(element => {
      random_two_letters.push(element.the_letter);
      });}
  catch {
    const result = await fetch(`${USERS_URL}/${x}/words`)
    const data = await result.json()
    const the_words = await data.words
    const two_random_words = await the_words.forEach(element => {
        random_two_words.push(element.the_word);
      });
  }
};