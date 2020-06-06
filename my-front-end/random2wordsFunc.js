async function random_two_words_func () {
  random_two_words = []
  random_two_letters = [] //<--this is so a single completed word won't break the app
  let x = userButtons.activeUserID[0];
  //alert("Return Random Two Letters With Low Scores");

  try {const result = await fetchDoggy.getFetchWords(x)//fetch(`${switchboard.USERS_URL}/${x}/words`)
    const data = await result.json()
    const the_words = await data.words
    the_words.forEach(element => {
    random_two_words.push(element.the_word);
    if (random_two_words == ["RESET!!!", "RESET!!!"]) {
      switchboard.the_whole_thing.innerHTML = `<center><h1>GREAT JOB ${userButtons.userName.value}</h1></center>`
      talker.speak("Great job " + `${userButtons.userName.value}`, " you did it!")
      fetchDoggy.deleteFetch()
      // fetch(switchboard.USERS_URL, {
      //   method: "DELETE"
      // })
    }
  });}

  catch { const result = await fetchDoggy.getFetchLetters(x) //fetch(`${switchboard.USERS_URL}/${x}/letters`)
    const data = await result.json()
    const the_letters = await data.letters
    the_letters.forEach(element => {
    random_two_letters.push(element.the_letter);
    if (random_two_letters == ["RESET!!!", "RESET!!!"]) {
      switchboard.the_whole_thing.innerHTML = `<center><h1>GREAT JOB ${userButtons.userName.value}</h1></center>`
      talker.speak("Great job " + `${userButtons.userName.value}`, " you did it!")
      fetchDoggy.deleteFetch()
      // fetch(switchboard.USERS_URL, {
      //   method: "DELETE"
      // })
    }
  });}
};