sw01.addEventListener('submit', (e) => {
  e.preventDefault();
  //alert(userName.value + ' submitted the form');
  theUserData['name'] = userName.value
  console.log(theUserData['name'])
  fetch(USERS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", 
      "Accept": "application/json"},
    body: JSON.stringify({
      "name": theUserData['name']
      })
    })
  .then(response=>response.json())
  .then(data=>console.log(data))
  sw01.style.display = "none";
  speak(rightHere="Nice to meet you " + (`${theUserData['name']}. ` + "Enter some words to play. When you're done, click finished."))
  wordmaker.style.display = "block"
}
);


// sw02 and sw02a were used for testing but no longer relevant
//RETURN FAKE SESSION
//const sw02 = document.getElementById('switchboard02');

// sw02.onclick = () => {
//   fetch(SESSIONS_URL)
//     .then((response) => {
//       response.json()
//     .then((data) => {alert(data["id"])});
//   });
// }
      
//DESTROY THE SESSION USER ... should destroy the session.

// sw02a.onclick = () => {
//   activeUserID = [];
//   fetch(SESSIONS_URL)
//     .then((response) => {
//       response.json()
//     .then((data) => {alert("Destroying user " + data["name"])});
//   })

//   fetch(USERS_URL, {
//     method: "DELETE"
//   })
// }

//ADD A WORD AND ROUTE TO WORDS CREATE CONTROLLER, LETTERS ARE ALSO GENERATED WITH MAKE_LETTERS METHOD FROM THE WORD MODEL


async function activeUser () {
  const result = await fetch(SESSIONS_URL);
  const data = await result.json();
  console.log(data["id"]); // this line is irrelvant, just here for testing
  activeUserID = []
  activeUserID.push(data["id"]);
}

sw03.addEventListener('click', (e) => { //this is such a screwed up fix, but seems to work ... otherwise, the activeUser would not interpolate to the URL unless clicked twice
  activeUser();
});

sw03.addEventListener('submit', (e) => {  
  e.preventDefault(); 
  
  let x = activeUserID[0];
 
  let random_word_choice_praise = [" is a great choice " + `${userName.value}`+"!", " is an awesome pick!", " is just what I was thinking!", " will be a fun word to learn " + `${userName.value}`+"!", " sounds good to me!", " sounds like a plan", " is an excellent choice " + `${userName.value}`+"!"]
  let randomPraise = random_word_choice_praise[Math.floor(Math.random() * random_word_choice_praise.length)]; 
  
  speak(rightHere=`${word.value}` + `${randomPraise}`);

  theWordData['the_word'] = word.value.toUpperCase();
  console.log(theWordData['the_word'])
  
 
  fetch(`${USERS_URL}/${x}/words`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", 
      "Accept": "application/json"},
    body: JSON.stringify({
      "the_word": theWordData['the_word']
      })
    })
  .then(response=>response.json())
  .then(data=>console.log(data))
});


sw05matchMe.addEventListener('click', (e) => {
  speak(rightHere=`${sw05matchMe.innerHTML}`)
})

function clickMatchMe() {
  sw05matchMe.click()
}


sw05.onclick = function () {
    set_random_two_letters_or_words_v2();
    wordmaker.style.display = "none"
    letterselect.style.display = "block"
}

async function set_random_two_letters_or_words_v2 () { //this function should be renamed since its for letters and words
  the_correct_choice = []

  const check_this = await check_cycle_now_func();
  if (((check_this + "") === "letters") || ((check_this + "") === "words"))  
  {  
    console.log("this is for letters OR for words")
  
    try {result = await random_two_letter_func_v2();
      let randomMatch = random_two_letters[Math.floor(Math.random() * random_two_letters.length)];
      if (randomMatch !== undefined) {
        the_correct_choice.push(randomMatch)
        if (randomMatch == "A") {
          let a_letters = ["apple", "animal", "apartment"]
          let randomA = a_letters[Math.floor(Math.random() * a_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomA}. Click ${randomMatch}`
        }
        else if (randomMatch == "B") {
          let b_letters = ["baseball", "buffalo", "bingo"]
          let randomB = b_letters[Math.floor(Math.random() * b_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomB}. Click ${randomMatch}`
        }
        else if (randomMatch == "C") {
          let c_letters = ["car", "cat", "castle"]
          let randomC = c_letters[Math.floor(Math.random() * c_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomC}. Click ${randomMatch}`}

        else if (randomMatch == "D") {
          let d_letters = ["dog", "duck", "doll"]
          let randomD = d_letters[Math.floor(Math.random() * d_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomD}. Click ${randomMatch}`}
        else if (randomMatch == "E") {
          let e_letters = ["ear", "elephant", "eggs"]
          let randomE = e_letters[Math.floor(Math.random() * e_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomE}. Click ${randomMatch}`}
        else if (randomMatch == "F") {
          let f_letters = ["fox", "ferry", "fun", "face", "friend"]
          let randomF = f_letters[Math.floor(Math.random() * f_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomF}. Click ${randomMatch}`}
        else if (randomMatch == "G") {
          let g_letters = ["gorilla", "giggle", "goose", "giraffe"]
          let randomG = g_letters[Math.floor(Math.random() * g_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomG}. Click ${randomMatch}`}
        else if (randomMatch == "H") {
          let h_letters = ["house", "hat", "hen", "happy"]
          let randomH = h_letters[Math.floor(Math.random() * h_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomH}. Click ${randomMatch}`}
        else if (randomMatch == "I") {
          let i_letters = ["iguana", "igloo", "ice"]
          let randomI = i_letters[Math.floor(Math.random() * i_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomI}. Click ${randomMatch}`}
        else if (randomMatch == "J") {
          let j_letters = ["jack", "jungle", "jellybean"]
          let randomJ = j_letters[Math.floor(Math.random() * j_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomJ}. Click ${randomMatch}`}
        else if (randomMatch == "K") {
          let k_letters = ["kangaroo", "kelp", "koala"]
          let randomK = k_letters[Math.floor(Math.random() * k_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomK}. Click ${randomMatch}`}
        else if (randomMatch == "L") {
          let l_letters = ["letters", "learn", "lion"]
          let randomL = l_letters[Math.floor(Math.random() * l_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomL}. Click ${randomMatch}`}
        else if (randomMatch == "M") {
          let m_letters = ["monkey", "money", "moose"]
          let randomM = m_letters[Math.floor(Math.random() * m_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomM}. Click ${randomMatch}`}
        else if (randomMatch == "N") {
          let n_letters = ["narwhal", "nest", "nose"]
          let randomN = n_letters[Math.floor(Math.random() * n_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomN}. Click ${randomMatch}`}
        else if (randomMatch == "O") {
          let o_letters = ["oval", "origami", "outside", "oatmeal"]
          let randomO = o_letters[Math.floor(Math.random() * o_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomO}. Click ${randomMatch}`}
        else if (randomMatch == "P") {
          let p_letters = ["puppy", "pig", "poop"]
          let randomP = p_letters[Math.floor(Math.random() * p_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomP}. Click ${randomMatch}`}
        else if (randomMatch == "Q") {
          let q_letters = ["quest", "quickly", "quack"]
          let randomQ = q_letters[Math.floor(Math.random() * q_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomQ}. Click ${randomMatch}`}
        else if (randomMatch == "R") {
          let r_letters = ["rhinocerous", "rooster", "rabbit"]
          let randomR = r_letters[Math.floor(Math.random() * r_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomR}. Click ${randomMatch}`}
        else if (randomMatch == "S") {
          let s_letters = ["silver", "sauce", "sheep", "sad", "silly"]
          let randomS = s_letters[Math.floor(Math.random() * s_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomS}. Click ${randomMatch}`}
        else if (randomMatch == "T") {
          let t_letters = ["toad", "toes", "toast", "tiger"]
          let randomT = t_letters[Math.floor(Math.random() * t_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomT}. Click ${randomMatch}`}
        else if (randomMatch == "U") {
          let u_letters = ["under", "up", "Uber"]
          let randomU = u_letters[Math.floor(Math.random() * u_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomU}. Click ${randomMatch}`}
        else if (randomMatch == "V") {
          let v_letters = ["vase", "vulture", "Volvo"]
          let randomV = v_letters[Math.floor(Math.random() * v_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomV}. Click ${randomMatch}`}
        else if (randomMatch == "W") {
          let w_letters = ["water", "waffles", "words"]
          let randomW = w_letters[Math.floor(Math.random() * w_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomW}. Click ${randomMatch}`}
        else if (randomMatch == "X") {
          let x_letters = ["xylophone", "Xerox", "x-ray"]
          let randomX = x_letters[Math.floor(Math.random() * x_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomX}. Click ${randomMatch}`}
        else if (randomMatch == "Y") {
          let y_letters = ["yak", "yes", "yellow", "yell"]
          let randomY = y_letters[Math.floor(Math.random() * y_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomY}. Click ${randomMatch}`}
        else if (randomMatch == "Z") {
          let z_letters = ["zebra", "zero", "zoom"]
          let randomZ = z_letters[Math.floor(Math.random() * z_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomZ}. Click ${randomMatch}`}

        else {
        sw05matchMe.innerHTML = `click the letter match for ${randomMatch}`}
        clickMatchMe()
        sw05opt1.innerHTML = `${random_two_letters[0]}`
        sw05opt2.innerHTML = `${random_two_letters[1]}`}
      else {
        result = await random_two_words_func();
        let randomMatch = random_two_words[Math.floor(Math.random() * random_two_words.length)];
        the_correct_choice.push(randomMatch) 
        if (randomMatch == "RESET!!!") {
          the_whole_thing.innerHTML = `<center><h1>GREAT JOB ${userName.value}</h1></center>`
          fetch(USERS_URL, {
            method: "DELETE"
          })
        }
        else{
        sw05matchMe.innerHTML = `click the word match for ${randomMatch}`
        clickMatchMe()
        sw05opt1.innerHTML = `${random_two_words[0]}`
        sw05opt2.innerHTML = `${random_two_words[1]}`}}}
    catch {result = await random_two_words_func();
      if (result === undefined) {
        alert("incoming undefined 2") //this was for debugging but never hit so far
      }
      else
      {let randomMatch = random_two_words[Math.floor(Math.random() * random_two_letters.length)];
      the_correct_choice.push(randomMatch)
      if (randomMatch == "RESET!!!") {
        the_whole_thing.innerHTML = `<center><h1>GREAT JOB ${userName.value}</h1></center>`
        fetch(USERS_URL, {
          method: "DELETE"
        })
      }
      else {
      sw05matchMe.innerHTML = `click the word match for ${randomMatch}`
      clickMatchMe()
      sw05opt1.innerHTML = `${random_two_words[0]}`
      sw05opt2.innerHTML = `${random_two_words[1]}`}}}
  }
  else if ((check_this + "") === "words,letters") { 
  console.log("this is for words AND letters")
    
    async function pickLetters () {
      try {await random_two_letter_func_v2();{
      let randomMatch = random_two_letters[Math.floor(Math.random() * random_two_letters.length)];
      the_correct_choice.push(randomMatch)
      if (randomMatch == "RESET!!!") {
        the_whole_thing.innerHTML = `<center><h1>GREAT JOB ${userName.value}</h1></center>`
        speak(rightHere="Great job " + `${userName.value}`, " you did it!")
        fetch(USERS_URL, {
          method: "DELETE"
        })
      }
      else {
        if (randomMatch == "A") {
          let a_letters = ["apple", "animal", "apartment"]
          let randomA = a_letters[Math.floor(Math.random() * a_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomA}. Click ${randomMatch}`
        }
        else if (randomMatch == "B") {
          let b_letters = ["baseball", "buffalo", "bingo"]
          let randomB = b_letters[Math.floor(Math.random() * b_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomB}. Click ${randomMatch}`
        }
        else if (randomMatch == "C") {
          let c_letters = ["car", "cat", "castle"]
          let randomC = c_letters[Math.floor(Math.random() * c_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomC}. Click ${randomMatch}`}
        else if (randomMatch == "D") {
          let d_letters = ["dog", "duck", "doll"]
          let randomD = d_letters[Math.floor(Math.random() * d_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomD}. Click ${randomMatch}`}
        else if (randomMatch == "E") {
          let e_letters = ["ear", "elephant", "eggs"]
          let randomE = e_letters[Math.floor(Math.random() * e_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomE}. Click ${randomMatch}`}
        else if (randomMatch == "F") {
          let f_letters = ["fox", "ferry", "fun", "face", "friend"]
          let randomF = f_letters[Math.floor(Math.random() * f_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomF}. Click ${randomMatch}`}
        else if (randomMatch == "G") {
          let g_letters = ["gorilla", "giggle", "goose", "giraffe"]
          let randomG = g_letters[Math.floor(Math.random() * g_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomG}. Click ${randomMatch}`}
        else if (randomMatch == "H") {
          let h_letters = ["house", "hat", "hen", "happy"]
          let randomH = h_letters[Math.floor(Math.random() * h_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomH}. Click ${randomMatch}`}
        else if (randomMatch == "I") {
          let i_letters = ["iguana", "igloo", "ice"]
          let randomI = i_letters[Math.floor(Math.random() * i_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomI}. Click ${randomMatch}`}
        else if (randomMatch == "J") {
          let j_letters = ["jack", "jungle", "jellybean"]
          let randomJ = j_letters[Math.floor(Math.random() * j_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomJ}. Click ${randomMatch}`}
        else if (randomMatch == "K") {
          let k_letters = ["kangaroo", "kelp", "koala"]
          let randomK = k_letters[Math.floor(Math.random() * k_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomK}. Click ${randomMatch}`}
        else if (randomMatch == "L") {
          let l_letters = ["letters", "learn", "lion"]
          let randomL = l_letters[Math.floor(Math.random() * l_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomL}. Click ${randomMatch}`}
        else if (randomMatch == "M") {
          let m_letters = ["monkey", "money", "moose"]
          let randomM = m_letters[Math.floor(Math.random() * m_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomM}. Click ${randomMatch}`}
        else if (randomMatch == "N") {
          let n_letters = ["narwhal", "nest", "nose"]
          let randomN = n_letters[Math.floor(Math.random() * n_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomN}. Click ${randomMatch}`}
        else if (randomMatch == "O") {
          let o_letters = ["oval", "origami", "outside", "oatmeal"]
          let randomO = o_letters[Math.floor(Math.random() * o_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomO}. Click ${randomMatch}`}
        else if (randomMatch == "P") {
          let p_letters = ["puppy", "pig", "poop"]
          let randomP = p_letters[Math.floor(Math.random() * p_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomP}. Click ${randomMatch}`}
        else if (randomMatch == "Q") {
          let q_letters = ["quest", "quickly", "quack"]
          let randomQ = q_letters[Math.floor(Math.random() * q_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomQ}. Click ${randomMatch}`}
        else if (randomMatch == "R") {
          let r_letters = ["rhinocerous", "rooster", "rabbit"]
          let randomR = r_letters[Math.floor(Math.random() * r_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomR}. Click ${randomMatch}`}
        else if (randomMatch == "S") {
          let s_letters = ["silver", "sauce", "sheep", "sad", "silly"]
          let randomS = s_letters[Math.floor(Math.random() * s_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomS}. Click ${randomMatch}`}
        else if (randomMatch == "T") {
          let t_letters = ["toad", "toes", "toast", "tiger"]
          let randomT = t_letters[Math.floor(Math.random() * t_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomT}. Click ${randomMatch}`}
        else if (randomMatch == "U") {
          let u_letters = ["under", "up", "Uber"]
          let randomU = u_letters[Math.floor(Math.random() * u_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomU}. Click ${randomMatch}`}
        else if (randomMatch == "V") {
          let v_letters = ["vase", "vulture", "Volvo"]
          let randomV = v_letters[Math.floor(Math.random() * v_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomV}. Click ${randomMatch}`}
        else if (randomMatch == "W") {
          let w_letters = ["water", "waffles", "words"]
          let randomW = w_letters[Math.floor(Math.random() * w_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomW}. Click ${randomMatch}`}
        else if (randomMatch == "X") {
          let x_letters = ["xylophone", "Xerox", "x-ray"]
          let randomX = x_letters[Math.floor(Math.random() * x_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomX}. Click ${randomMatch}`}
        else if (randomMatch == "Y") {
          let y_letters = ["yak", "yes", "yellow", "yell"]
          let randomY = y_letters[Math.floor(Math.random() * y_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomY}. Click ${randomMatch}`}
        else if (randomMatch == "Z") {
          let z_letters = ["zebra", "zero", "zoom"]
          let randomZ = z_letters[Math.floor(Math.random() * z_letters.length)];
          sw05matchMe.innerHTML = `${randomMatch} is for ${randomZ}. Click ${randomMatch}`}


        else {
        sw05matchMe.innerHTML = `click the letter match for ${randomMatch}`}
      clickMatchMe()
      sw05opt1.innerHTML = `${random_two_letters[0]}`
      sw05opt2.innerHTML = `${random_two_letters[1]}`}}}
      catch {
        pickWords()
      }}
    
    async function pickWords () {
      try {await random_two_words_func();{
        let randomMatch = random_two_words[Math.floor(Math.random() * random_two_letters.length)];
        the_correct_choice.push(randomMatch)
        if (randomMatch == "RESET!!!") {
          the_whole_thing.innerHTML = `<center><h1>GREAT JOB ${userName.value}</h1></center>`
          speak(rightHere="Great job " + `${userName.value}`, " you did it!")
          fetch(USERS_URL, {
            method: "DELETE"
          })
        }
        else {
        sw05matchMe.innerHTML = `click the word match for ${randomMatch}`
        clickMatchMe()
        sw05opt1.innerHTML = `${random_two_words[0]}`
        sw05opt2.innerHTML = `${random_two_words[1]}`}}
      }
        catch {pickLetters()}}
    
    const will_it_be_words_or_letters = [pickWords, pickLetters]
    let grab_one = will_it_be_words_or_letters[Math.floor(Math.random() * will_it_be_words_or_letters.length)];
    try {grab_one()}
    catch {set_random_two_letters_or_words_v2 ()}
  }

}

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

async function random_two_words_func () {
  random_two_words = []
  random_two_letters = [] //<--this is so a single completed word won't break the app
  let x = activeUserID[0];
  //alert("Return Random Two Letters With Low Scores");

  try {const result = await fetch(`${USERS_URL}/${x}/words`)
    const data = await result.json()
    const the_words = await data.words
    the_words.forEach(element => {
    random_two_words.push(element.the_word);
    if (random_two_words == ["RESET!!!", "RESET!!!"]) {
      the_whole_thing.innerHTML = `<center><h1>GREAT JOB ${userName.value}</h1></center>`
      speak(rightHere="Great job " + `${userName.value}`, " you did it!")
      fetch(USERS_URL, {
        method: "DELETE"
      })
    }
  });}

  catch { const result = await fetch(`${USERS_URL}/${x}/letters`)
    const data = await result.json()
    const the_letters = await data.letters
    the_letters.forEach(element => {
    random_two_letters.push(element.the_letter);
    if (random_two_letters == ["RESET!!!", "RESET!!!"]) {
      the_whole_thing.innerHTML = `<center><h1>GREAT JOB ${userName.value}</h1></center>`
      speak(rightHere="Great job " + `${userName.value}`, " you did it!")
      fetch(USERS_URL, {
        method: "DELETE"
      })
    }
  });}
};

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
  //this is basically a clone of the random_two_letters_func_v2, rewritten for letters

  function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }


sw05opt1.addEventListener('click', (e) => {
  let good_job_choice = ["Nice!", "Great!", "Wow!"]
  let goodJob = good_job_choice[Math.floor(Math.random() * good_job_choice.length)]; 
 
 //speak(rightHere=`${goodJob}`);

  let oops_choice = ["Oops!", "Whoops!", "Baah!"]
  let oopsies = oops_choice[Math.floor(Math.random() * oops_choice.length)]; 
 
 //speak(rightHere=${oopsies}`);
  e.preventDefault();
  if (the_correct_choice[0] == sw05opt1.innerHTML) {
    speak(rightHere=`${goodJob}`);
    wait(1000)
    let x = activeUserID[0]
    let y = the_correct_choice[0]
    if (the_correct_choice[0].length === 1) {
    fetch(`${USERS_URL}/${x}/letters/${y}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json", 
        "Accept": "application/json"},
      body: JSON.stringify({
        "the_letter": `${y}` //this line is actually irrelevant because I can use the id from the fetch request
        })
      });
    //.then(response=>response.json())
    //.then(data=>console.log(data))
    set_random_two_letters_or_words_v2();}

    else {
      fetch(`${USERS_URL}/${x}/words/${y}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json", 
        "Accept": "application/json"},
      body: JSON.stringify({
        "the_word": `${y}` //this line is actually irrelevant because I can use the id from the fetch request
        })
      });
    set_random_two_letters_or_words_v2();
    }

  }
  else {
    speak(rightHere=`${oopsies}`);
    wait(1000);
    set_random_two_letters_or_words_v2();
  }
});

sw05opt2.addEventListener('click', (e) => {
  let good_job_choice = ["Nice!", "Great!", "Wow!"]
  let goodJob = good_job_choice[Math.floor(Math.random() * good_job_choice.length)]; 
 
 //speak(rightHere=`${goodJob}`);

  let oops_choice = ["Oops!", "Whoops!", "Baah!"]
  let oopsies = oops_choice[Math.floor(Math.random() * oops_choice.length)]; 
 
 //speak(rightHere=${oopsies}`);

  e.preventDefault();
  if (the_correct_choice[0] == sw05opt2.innerHTML) {
    speak(rightHere=`${goodJob}`);
    wait(1000)
    let x = activeUserID[0]
    let y = the_correct_choice[0]
    if (the_correct_choice[0].length === 1) { 
      fetch(`${USERS_URL}/${x}/letters/${y}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json", 
        "Accept": "application/json"},
      body: JSON.stringify({
        "the_letter": `${y}` //this line is actually irrelevant because I can use the id from the fetch request
        })
      })
    //.then(response=>response.json())
    //.then(data=>console.log(data))
    set_random_two_letters_or_words_v2();
    }
    else {fetch(`${USERS_URL}/${x}/words/${y}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json", 
        "Accept": "application/json"},
      body: JSON.stringify({
        "the_word": `${y}` //this line is actually irrelevant because I can use the id from the fetch request
        })
      });
    set_random_two_letters_or_words_v2();
    }

  }
  else {
    speak(rightHere=`${oopsies}`);
    wait(1000);
    set_random_two_letters_or_words_v2();
  }
});
