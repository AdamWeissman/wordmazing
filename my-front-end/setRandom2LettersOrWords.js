async function set_random_two_letters_or_words_v2 () { //this function should be renamed since its for letters and words
  the_correct_choice = []

  const check_this = await check_cycle_now_func();
  if (((check_this + "") === "letters") || ((check_this + "") === "words"))  
  {  
    console.log("this is for letters OR for words")
    // TODO: Refactor into switch statement or map letters to arrays
    
    
    function randomizer (someArray) {
      return someArray[Math.floor(Math.random() * someArray.length)]
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
      //ADD ALL THE LETTERS...
    } 

    function letterSetter(letter) {
      let theWord = randomizer(monsterLetters[letter])
        switchboard.sw05matchMe.innerHTML = `${letter} is for ${theWord}. Click ${letter}`
    }
    
    //if rarandomMatch = random_two_letters[Math.floor(Math.random() * random_two_letters.length)];
    
    try {result = await random_two_letter_func_v2();
      let randomMatch = randomizer(random_two_letters)
      if (randomMatch !== undefined) {
        the_correct_choice.push(randomMatch)
        letterSetter(randomMatch)

        // if (randomMatch == "A") {
        //   let a_letters = ["apple", "animal", "apartment"]
        //   let randomA = randomizer(a_letters);
        //   switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomA}. Click ${randomMatch}`
        // }
        // else if (randomMatch == "B") {
        //   let b_letters = ["baseball", "buffalo", "bingo"]
        //   let randomB = b_letters[Math.floor(Math.random() * b_letters.length)];
        //   switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomB}. Click ${randomMatch}`
        // }
        // if (randomMatch == "C") {
        //   let c_letters = ["car", "cat", "castle"]
        //   let randomC = c_letters[Math.floor(Math.random() * c_letters.length)];
        //   switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomC}. Click ${randomMatch}`}

        // else if (randomMatch == "D") {
        //   let d_letters = ["dog", "duck", "doll"]
        //   let randomD = d_letters[Math.floor(Math.random() * d_letters.length)];
        //   switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomD}. Click ${randomMatch}`}
        // else if (randomMatch == "E") {
        //   let e_letters = ["ear", "elephant", "eggs"]
        //   let randomE = e_letters[Math.floor(Math.random() * e_letters.length)];
        //   switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomE}. Click ${randomMatch}`}
        // else if (randomMatch == "F") {
        //   let f_letters = ["fox", "ferry", "fun", "face", "friend"]
        //   let randomF = f_letters[Math.floor(Math.random() * f_letters.length)];
        //   switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomF}. Click ${randomMatch}`}
        // else if (randomMatch == "G") {
        //   let g_letters = ["gorilla", "giggle", "goose", "giraffe"]
        //   let randomG = g_letters[Math.floor(Math.random() * g_letters.length)];
        //   switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomG}. Click ${randomMatch}`}
        // else if (randomMatch == "H") {
        //   let h_letters = ["house", "hat", "hen", "happy"]
        //   let randomH = h_letters[Math.floor(Math.random() * h_letters.length)];
        //   switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomH}. Click ${randomMatch}`}
        // else if (randomMatch == "I") {
        //   let i_letters = ["iguana", "igloo", "ice"]
        //   let randomI = i_letters[Math.floor(Math.random() * i_letters.length)];
        //   switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomI}. Click ${randomMatch}`}
        // else if (randomMatch == "J") {
        //   let j_letters = ["jack", "jungle", "jellybean"]
        //   let randomJ = j_letters[Math.floor(Math.random() * j_letters.length)];
        //   switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomJ}. Click ${randomMatch}`}
        // else if (randomMatch == "K") {
        //   let k_letters = ["kangaroo", "kelp", "koala"]
        //   let randomK = k_letters[Math.floor(Math.random() * k_letters.length)];
        //   switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomK}. Click ${randomMatch}`}
        // else if (randomMatch == "L") {
        //   let l_letters = ["letters", "learn", "lion"]
        //   let randomL = l_letters[Math.floor(Math.random() * l_letters.length)];
        //   switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomL}. Click ${randomMatch}`}
        // else if (randomMatch == "M") {
        //   let m_letters = ["monkey", "money", "moose"]
        //   let randomM = m_letters[Math.floor(Math.random() * m_letters.length)];
        //   switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomM}. Click ${randomMatch}`}
        // else if (randomMatch == "N") {
        //   let n_letters = ["narwhal", "nest", "nose"]
        //   let randomN = n_letters[Math.floor(Math.random() * n_letters.length)];
        //   switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomN}. Click ${randomMatch}`}
        // else if (randomMatch == "O") {
        //   let o_letters = ["oval", "origami", "outside", "oatmeal"]
        //   let randomO = o_letters[Math.floor(Math.random() * o_letters.length)];
        //   switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomO}. Click ${randomMatch}`}
        // else if (randomMatch == "P") {
        //   let p_letters = ["puppy", "pig", "poop"]
        //   let randomP = p_letters[Math.floor(Math.random() * p_letters.length)];
        //   switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomP}. Click ${randomMatch}`}
        // else if (randomMatch == "Q") {
        //   let q_letters = ["quest", "quickly", "quack"]
        //   let randomQ = q_letters[Math.floor(Math.random() * q_letters.length)];
        //   switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomQ}. Click ${randomMatch}`}
        // else if (randomMatch == "R") {
        //   let r_letters = ["rhinocerous", "rooster", "rabbit"]
        //   let randomR = r_letters[Math.floor(Math.random() * r_letters.length)];
        //   switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomR}. Click ${randomMatch}`}
        // else if (randomMatch == "S") {
        //   let s_letters = ["silver", "sauce", "sheep", "sad", "silly"]
        //   let randomS = s_letters[Math.floor(Math.random() * s_letters.length)];
        //   switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomS}. Click ${randomMatch}`}
        // else if (randomMatch == "T") {
        //   let t_letters = ["toad", "toes", "toast", "tiger"]
        //   let randomT = t_letters[Math.floor(Math.random() * t_letters.length)];
        //   switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomT}. Click ${randomMatch}`}
        // else if (randomMatch == "U") {
        //   let u_letters = ["under", "up", "Uber"]
        //   let randomU = u_letters[Math.floor(Math.random() * u_letters.length)];
        //   switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomU}. Click ${randomMatch}`}
        // else if (randomMatch == "V") {
        //   let v_letters = ["vase", "vulture", "Volvo"]
        //   let randomV = v_letters[Math.floor(Math.random() * v_letters.length)];
        //   switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomV}. Click ${randomMatch}`}
        // else if (randomMatch == "W") {
        //   let w_letters = ["water", "waffles", "words"]
        //   let randomW = w_letters[Math.floor(Math.random() * w_letters.length)];
        //   switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomW}. Click ${randomMatch}`}
        // else if (randomMatch == "X") {
        //   let x_letters = ["xylophone", "Xerox", "x-ray"]
        //   let randomX = x_letters[Math.floor(Math.random() * x_letters.length)];
        //   switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomX}. Click ${randomMatch}`}
        // else if (randomMatch == "Y") {
        //   let y_letters = ["yak", "yes", "yellow", "yell"]
        //   let randomY = y_letters[Math.floor(Math.random() * y_letters.length)];
        //   switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomY}. Click ${randomMatch}`}
        // else if (randomMatch == "Z") {
        //   let z_letters = ["zebra", "zero", "zoom"]
        //   let randomZ = z_letters[Math.floor(Math.random() * z_letters.length)];
        //   switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomZ}. Click ${randomMatch}`}

        // else {
        //   switchboard.sw05matchMe.innerHTML = `click the letter match for ${randomMatch}`}
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
          // fetch(switchboard.USERS_URL, {
          //   method: "DELETE"
          // })
        }
        else{
        switchboard.sw05matchMe.innerHTML = `click the word match for ${randomMatch}`
        clickMatchMe()
        switchboard.sw05opt1.innerHTML = `${random_two_words[0]}`
        switchboard.sw05opt2.innerHTML = `${random_two_words[1]}`}}}
    catch {result = await random_two_words_func();
      if (result === undefined) {
        alert("incoming undefined 2") //this was for debugging but never hit so far
      }
      else
      {let randomMatch = random_two_words[Math.floor(Math.random() * random_two_letters.length)];
      the_correct_choice.push(randomMatch)
      if (randomMatch == "RESET!!!") {
        switchboard.the_whole_thing.innerHTML = `<center><h1>GREAT JOB ${userButtons.userName.value}</h1></center>`
        fetchDoggy.deleteFetch()
        // fetch(switchboard.USERS_URL, {
        //   method: "DELETE"
        // })
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
        // fetch(switchboard.USERS_URL, {
        //   method: "DELETE"
        // })
      }
      else {
        if (randomMatch == "A") {
          let a_letters = ["apple", "animal", "apartment"]
          let randomA = a_letters[Math.floor(Math.random() * a_letters.length)];
          switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomA}. Click ${randomMatch}`
        }
        else if (randomMatch == "B") {
          let b_letters = ["baseball", "buffalo", "bingo"]
          let randomB = b_letters[Math.floor(Math.random() * b_letters.length)];
          switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomB}. Click ${randomMatch}`
        }
        else if (randomMatch == "C") {
          let c_letters = ["car", "cat", "castle"]
          let randomC = c_letters[Math.floor(Math.random() * c_letters.length)];
          switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomC}. Click ${randomMatch}`}
        else if (randomMatch == "D") {
          let d_letters = ["dog", "duck", "doll"]
          let randomD = d_letters[Math.floor(Math.random() * d_letters.length)];
          switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomD}. Click ${randomMatch}`}
        else if (randomMatch == "E") {
          let e_letters = ["ear", "elephant", "eggs"]
          let randomE = e_letters[Math.floor(Math.random() * e_letters.length)];
          switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomE}. Click ${randomMatch}`}
        else if (randomMatch == "F") {
          let f_letters = ["fox", "ferry", "fun", "face", "friend"]
          let randomF = f_letters[Math.floor(Math.random() * f_letters.length)];
          switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomF}. Click ${randomMatch}`}
        else if (randomMatch == "G") {
          let g_letters = ["gorilla", "giggle", "goose", "giraffe"]
          let randomG = g_letters[Math.floor(Math.random() * g_letters.length)];
          switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomG}. Click ${randomMatch}`}
        else if (randomMatch == "H") {
          let h_letters = ["house", "hat", "hen", "happy"]
          let randomH = h_letters[Math.floor(Math.random() * h_letters.length)];
          switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomH}. Click ${randomMatch}`}
        else if (randomMatch == "I") {
          let i_letters = ["iguana", "igloo", "ice"]
          let randomI = i_letters[Math.floor(Math.random() * i_letters.length)];
          switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomI}. Click ${randomMatch}`}
        else if (randomMatch == "J") {
          let j_letters = ["jack", "jungle", "jellybean"]
          let randomJ = j_letters[Math.floor(Math.random() * j_letters.length)];
          switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomJ}. Click ${randomMatch}`}
        else if (randomMatch == "K") {
          let k_letters = ["kangaroo", "kelp", "koala"]
          let randomK = k_letters[Math.floor(Math.random() * k_letters.length)];
          switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomK}. Click ${randomMatch}`}
        else if (randomMatch == "L") {
          let l_letters = ["letters", "learn", "lion"]
          let randomL = l_letters[Math.floor(Math.random() * l_letters.length)];
          switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomL}. Click ${randomMatch}`}
        else if (randomMatch == "M") {
          let m_letters = ["monkey", "money", "moose"]
          let randomM = m_letters[Math.floor(Math.random() * m_letters.length)];
          switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomM}. Click ${randomMatch}`}
        else if (randomMatch == "N") {
          let n_letters = ["narwhal", "nest", "nose"]
          let randomN = n_letters[Math.floor(Math.random() * n_letters.length)];
          switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomN}. Click ${randomMatch}`}
        else if (randomMatch == "O") {
          let o_letters = ["oval", "origami", "outside", "oatmeal"]
          let randomO = o_letters[Math.floor(Math.random() * o_letters.length)];
          switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomO}. Click ${randomMatch}`}
        else if (randomMatch == "P") {
          let p_letters = ["puppy", "pig", "poop"]
          let randomP = p_letters[Math.floor(Math.random() * p_letters.length)];
          switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomP}. Click ${randomMatch}`}
        else if (randomMatch == "Q") {
          let q_letters = ["quest", "quickly", "quack"]
          let randomQ = q_letters[Math.floor(Math.random() * q_letters.length)];
          switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomQ}. Click ${randomMatch}`}
        else if (randomMatch == "R") {
          let r_letters = ["rhinocerous", "rooster", "rabbit"]
          let randomR = r_letters[Math.floor(Math.random() * r_letters.length)];
          switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomR}. Click ${randomMatch}`}
        else if (randomMatch == "S") {
          let s_letters = ["silver", "sauce", "sheep", "sad", "silly"]
          let randomS = s_letters[Math.floor(Math.random() * s_letters.length)];
          switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomS}. Click ${randomMatch}`}
        else if (randomMatch == "T") {
          let t_letters = ["toad", "toes", "toast", "tiger"]
          let randomT = t_letters[Math.floor(Math.random() * t_letters.length)];
          switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomT}. Click ${randomMatch}`}
        else if (randomMatch == "U") {
          let u_letters = ["under", "up", "Uber"]
          let randomU = u_letters[Math.floor(Math.random() * u_letters.length)];
          switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomU}. Click ${randomMatch}`}
        else if (randomMatch == "V") {
          let v_letters = ["vase", "vulture", "Volvo"]
          let randomV = v_letters[Math.floor(Math.random() * v_letters.length)];
          switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomV}. Click ${randomMatch}`}
        else if (randomMatch == "W") {
          let w_letters = ["water", "waffles", "words"]
          let randomW = w_letters[Math.floor(Math.random() * w_letters.length)];
          switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomW}. Click ${randomMatch}`}
        else if (randomMatch == "X") {
          let x_letters = ["xylophone", "Xerox", "x-ray"]
          let randomX = x_letters[Math.floor(Math.random() * x_letters.length)];
          switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomX}. Click ${randomMatch}`}
        else if (randomMatch == "Y") {
          let y_letters = ["yak", "yes", "yellow", "yell"]
          let randomY = y_letters[Math.floor(Math.random() * y_letters.length)];
          switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomY}. Click ${randomMatch}`}
        else if (randomMatch == "Z") {
          let z_letters = ["zebra", "zero", "zoom"]
          let randomZ = z_letters[Math.floor(Math.random() * z_letters.length)];
          switchboard.sw05matchMe.innerHTML = `${randomMatch} is for ${randomZ}. Click ${randomMatch}`}


        else {
          switchboard.sw05matchMe.innerHTML = `click the letter match for ${randomMatch}`}
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
          // fetch(switchboard.USERS_URL, {
          //   method: "DELETE"
          // })
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