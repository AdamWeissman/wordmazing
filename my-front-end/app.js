
const BASE_URL = "http://localhost:3000"
const USERS_URL = `${BASE_URL}/api/v1/users`
const SESSIONS_URL = `${USERS_URL}/active_session`


//CREATE A USER 
const sw01 = document.getElementById('switchboard01');
const userName = document.querySelector('#sw01name');
const theUserData = {};

sw01.addEventListener('submit', (e) => {
  e.preventDefault();
  alert(userName.value + ' submitted the form');
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
});

//RETURN FAKE SESSION
const sw02 = document.getElementById('switchboard02');

sw02.onclick = () => {
  fetch(SESSIONS_URL)
    .then((response) => {
      response.json()
    .then((data) => {alert(data["id"])});
  });
}
      
//DESTROY THE SESSION USER ... should destroy the session.
const sw02a = document.getElementById('switchboard02a');

sw02a.onclick = () => {
  activeUserID = [];
  fetch(SESSIONS_URL)
    .then((response) => {
      response.json()
    .then((data) => {alert("Destroying user " + data["name"])});
  })

  fetch(USERS_URL, {
    method: "DELETE"
  })
}

//ADD A WORD AND ROUTE TO WORDS CREATE CONTROLLER, LETTERS ARE ALSO GENERATED WITH MAKE_LETTERS METHOD FROM THE WORD MODEL

const sw03 = document.getElementById('switchboard03')
const word = document.querySelector('#sw03word');
const theWordData = {};
let activeUserID = []; //this is used here and will be used elsewhere

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
  alert(word.value + ' has been submitted');
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


//
//ABOVE THIS LINE IS WORKING
//
//
//

//TESTING

const sw05 = document.getElementById('switchboard05')
const sw05matchMe = document.getElementById('swb05matchThis')
const sw05opt1 = document.getElementById('swb05option1')
const sw05opt2 = document.getElementById('swb05option2')
const the_whole_thing = document.body

// let random_two_letters = [] //dont delete this
// let the_correct_letter = [] //this line an the one below are used for the clicking events
// let the_correct_word = []

sw05.onclick = function () {
    set_random_two_letters_or_words_v2();
}

async function set_random_two_letters_or_words_v2 () { //this function should be renamed since its for letters and words
  the_correct_choice = []
  const check_this = await check_cycle_now_func();
  if (((check_this + "") === "letters") || ((check_this + "") === "words"))  
  {  
    console.log("this is for letters OR for words")
  
    try {result = await random_two_letter_func_v2();
      let randomMatch = random_two_letters[Math.floor(Math.random() * random_two_letters.length)];
      the_correct_choice.push(randomMatch)
      sw05matchMe.innerHTML = `click the letter match for ${randomMatch}`
      sw05opt1.innerHTML = `${random_two_letters[0]}`
      sw05opt2.innerHTML = `${random_two_letters[1]}`}
    catch {result = await random_two_words_func();
      let randomMatch = random_two_words[Math.floor(Math.random() * random_two_letters.length)];
      the_correct_choice.push(randomMatch)
      if (randomMatch === "RESET!!!") {
        the_whole_thing.innerHTML = `<center><h1>GREAT JOB ${userName.value}</h1></center>`
        fetch(USERS_URL, {
          method: "DELETE"
        })
      }
      else {
      sw05matchMe.innerHTML = `click the word match for ${randomMatch}`
      sw05opt1.innerHTML = `${random_two_words[0]}`
      sw05opt2.innerHTML = `${random_two_words[1]}`}}
  }
  else if ((check_this + "") === "words,letters") { 
  console.log("this is for words AND letters")
    async function pickLetters () {
      await random_two_letter_func_v2();{
      let randomMatch = random_two_letters[Math.floor(Math.random() * random_two_letters.length)];
      the_correct_choice.push(randomMatch)
      sw05matchMe.innerHTML = `click the letter match for ${randomMatch}`
      sw05opt1.innerHTML = `${random_two_letters[0]}`
      sw05opt2.innerHTML = `${random_two_letters[1]}`}}
    
    async function pickWords () {
      await random_two_words_func();{
      let randomMatch = random_two_words[Math.floor(Math.random() * random_two_letters.length)];
      the_correct_choice.push(randomMatch)
      if (randomMatch === "RESET!!!") {
        the_whole_thing.innerHTML = `<center><h1>GREAT JOB ${userName.value}</h1></center>`
        fetch(USERS_URL, {
          method: "DELETE"
        })
      }
      else {
      sw05matchMe.innerHTML = `click the word match for ${randomMatch}`
      sw05opt1.innerHTML = `${random_two_words[0]}`
      sw05opt2.innerHTML = `${random_two_words[1]}`}}}

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
    await the_words.forEach(element => {
    random_two_words.push(element.the_word);
  });}

  catch { const result2 = await fetch(`${USERS_URL}/${x}/letters`)
    const data2 = await result2.json()
    const the_letters = await data2.letters
    await the_letters.forEach(element => {
    random_two_letters.push(element.the_letter);
  });}
};

async function check_cycle_now_func () {
  words_and_or_letters = new Set()
  let x = activeUserID[0];
  const result = await fetch(`${USERS_URL}/${x}/letters`)
  const data = await result.json()
  // const data = await result.json()
  // const the_letters = await data.letters
  // const the_words = await data.words
  //const what_is_cycling = 
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

sw05opt1.addEventListener('click', (e) => {
  e.preventDefault();
  if (the_correct_choice[0] === sw05opt1.innerHTML) {
    alert("YOU ARE CORRECT");
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
    alert("YOU ARE WRONG");
    set_random_two_letters_or_words_v2();
  }
});

sw05opt2.addEventListener('click', (e) => {
  e.preventDefault();
  if (the_correct_choice[0] === sw05opt2.innerHTML) {
    alert("YOU ARE CORRECT");
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
    alert("YOU ARE WRONG");
    set_random_two_letters_or_words_v2();
  }
});


//......................................................................................
//


// const sw11 = document.getElementById('switchboard11')
// sw11.onclick = function () {
//   alert("admin Login for Session...autopopulate for now")
// }

// const sw12 = document.getElementById('switchboard12')
// sw12.onclick = function () {
//   alert("admin Logout for Session")
// }

// const sw13 = document.getElementById('switchboard13')
// sw13.onclick = function () {
//   alert("admin sees readymades index")
// }

// const sw14 = document.getElementById('switchboard14')
// sw14.onclick = function () {
//   prompt("admin creates a readymade")
// }

// const sw15 = document.getElementById('switchboard15')
// sw15.onclick = function () {
//   prompt("admin updates a readymade")
// }

// const sw16 = document.getElementById('switchboard16')
// sw16.onclick = function () {
//   alert("admin deletes a readymade")
// }

// const sw17 = document.getElementById('switchboard17')
// sw17.onclick = function () {
//   alert("admin sees spokenmessages index")
// }

// const sw18 = document.getElementById('switchboard18')
// sw18.onclick = function () {
//   alert("admin creates a spokenmessage")
// }

// const sw19 = document.getElementById('switchboard19')
// sw19.onclick = function () {
//   alert("admin updates a spokenmessage")
// }

// const sw20 = document.getElementById('switchboard20')
// sw20.onclick = function () {
//   alert("admin deletes a spokenmessage")
// }


// ALL THIS CODE IS REDUNDANT, ABOVE SOLUTIONS ENCOMPASSED THESE TESTS
// NOT YET TESTING BELOW THIS LINE
// const sw06 = document.getElementById('switchboard06')
// sw06.onclick = function () {
//   alert("Return a Random Two Words if a Word is Activated... or Random Two Letters")
// }

// const sw07 = document.getElementById('switchboard07')
// sw07.onclick = function () {
//   alert("Increment Score of a Random Word by 9")
// }

// const sw08 = document.getElementById('switchboard08')
// sw08.onclick = function () {
//   alert("If only one letter left, Return Random Letter with Last Letter in DB")
// }

// const sw09 = document.getElementById('switchboard09')
// sw09.onclick = function () {
//   alert("If all letters scored out, Return a Word")
// }

// const sw10 = document.getElementById('switchboard10')
// sw10.onclick = function () {
//   alert("If all words scored out... Return Congratulations and delete user")
// }