function randomizer (someArray) {
  return someArray[Math.floor(Math.random() * someArray.length)]
}

function letterSetter(letter) {
  let theWord = randomizer(monsterLetters[letter])
    switchboard.sw05matchMe.innerHTML = `${letter} is for ${theWord}. Click ${letter}`
}

const monsterLetters = {
  A: ["apple", "animal", "apartment"],
  B: ["baseball", "buffalo", "bingo"],
  C: ["car", "cat", "castle"],
  D: ["dog", "duck", "doll"],
  E: ["ear", "elephant", "eggs"],
  F: ["fox", "ferry", "fun", "face", "friend"],
  G: ["gorilla", "giggle", "goose", "giraffe"],
  H: ["house", "hat", "hen", "happy"],
  I: ["iguana", "igloo", "ice"],
  J: ["jack", "jungle", "jellybean"],
  K: ["kangaroo", "kelp", "koala"],
  L: ["letters", "learn", "lion"],
  M: ["monkey", "money", "moose"],
  N: ["narwhal", "nest", "nose"],
  O: ["oval", "origami", "outside", "oatmeal"],
  P: ["puppy", "pig", "poop"],
  Q: ["quest", "quickly", "quack"],
  R: ["rhinocerous", "rooster", "rabbit"],
  S: ["silver", "sauce", "sheep", "sad"],
  T: ["toad", "toes", "toast", "tiger"],
  U: ["under", "up", "Uber"],
  V: ["vase", "vulture", "Volvo"],
  W: ["water", "waffles", "words"],
  X: ["xylophone", "Xerox", "x-ray"],
  Y: ["yak", "yes", "yellow", "yell"],
  Z: ["zebra", "zero", "zoom"],
} 

async function set_random_two_letters_or_words_v2 () { //this function should be renamed since its for letters and words
  the_correct_choice = []

  const check_this = await check_cycle_now_func();
  if (((check_this + "") === "letters") || ((check_this + "") === "words"))  
  {  
    console.log("this is for letters OR for words")
      
  
    try {result = await random_two_letter_func_v2();
      let randomMatch = randomizer(random_two_letters)
      if (randomMatch !== undefined) {
        the_correct_choice.push(randomMatch)
        this.letterSetter(randomMatch)

        clickMatchMe()
    
        switchboard.sw05opt1.innerHTML = `${random_two_letters[0]}`
        switchboard.sw05opt2.innerHTML = `${random_two_letters[1]}`}
      else {
        result = await random_two_words_func();
        let randomMatch = random_two_words[Math.floor(Math.random() * random_two_words.length)];
        the_correct_choice.push(randomMatch) 
        if (randomMatch == "RESET!!!") {
          switchboard.the_whole_thing.innerHTML = `<center><h1>GREAT JOB ${userButtons.userName.value}</h1></center>`
          fetchDoggy.deleteFetch()
        }
        else{
        switchboard.sw05matchMe.innerHTML = `click the word match for ${randomMatch}`
        clickMatchMe()
        switchboard.sw05opt1.innerHTML = `${random_two_words[0]}`
        switchboard.sw05opt2.innerHTML = `${random_two_words[1]}`}}}
    catch {result = await random_two_words_func();
      if (result === undefined) {
        alert("incoming undefined 2") 
      }
      else
      {let randomMatch = random_two_words[Math.floor(Math.random() * random_two_letters.length)];
      the_correct_choice.push(randomMatch)
      if (randomMatch == "RESET!!!") {
        switchboard.the_whole_thing.innerHTML = `<center><h1>GREAT JOB ${userButtons.userName.value}</h1></center>`
        fetchDoggy.deleteFetch()
 
      }
      else {
      switchboard.sw05matchMe.innerHTML = `click the word match for ${randomMatch}`
      clickMatchMe()
      switchboard.sw05opt1.innerHTML = `${random_two_words[0]}`
      switchboard.sw05opt2.innerHTML = `${random_two_words[1]}`}}}
  }
  else if ((check_this + "") === "words,letters") { 
  console.log("this is for words AND letters")
    
    async function pickLetters () {
      try {await random_two_letter_func_v2();{
      let randomMatch = random_two_letters[Math.floor(Math.random() * random_two_letters.length)];
      the_correct_choice.push(randomMatch)
      if (randomMatch == "RESET!!!") {
        switchboard.the_whole_thing.innerHTML = `<center><h1>GREAT JOB ${userButtons.userName.value}</h1></center>`
        talker.speak("Great job " + `${userButtons.userName.value}`, " you did it!")
        fetchDoggy.deleteFetch()
      }
      else {
          this.letterSetter(randomMatch)  
        
          clickMatchMe()
          switchboard.sw05opt1.innerHTML = `${random_two_letters[0]}`
          switchboard.sw05opt2.innerHTML = `${random_two_letters[1]}`}}}
      catch {
        pickWords()
      }}
    
    async function pickWords () {
      try {await random_two_words_func();{
        let randomMatch = random_two_words[Math.floor(Math.random() * random_two_letters.length)];
        the_correct_choice.push(randomMatch)
        if (randomMatch == "RESET!!!") {
          switchboard.the_whole_thing.innerHTML = `<center><h1>GREAT JOB ${userButtons.userName.value}</h1></center>`
          talker.speak("Great job " + `${userButtons.userName.value}`, " you did it!")
          fetchDoggy.deleteFetch()

        }
        else {
        switchboard.sw05matchMe.innerHTML = `click the word match for ${randomMatch}`
        clickMatchMe()
        switchboard.sw05opt1.innerHTML = `${random_two_words[0]}`
        switchboard.sw05opt2.innerHTML = `${random_two_words[1]}`}}
      }
        catch {pickLetters()}}
    
    const will_it_be_words_or_letters = [pickWords, pickLetters]
    let grab_one = will_it_be_words_or_letters[Math.floor(Math.random() * will_it_be_words_or_letters.length)];
    try {grab_one()}
    catch {set_random_two_letters_or_words_v2 ()}
  }

}