
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
let activeUserID = [];

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

//random two letters in prepartion of score update

let random_two_letters = []

const sw04 = document.getElementById('switchboard04')
const sw04opt1 = document.getElementById('swb04option1')
const sw04opt2 = document.getElementById('swb04option2')

sw04.onclick = function () {
  //random_two_letter_func();
  set_random_two_letters();
}

async function set_random_two_letters () {
  result = await random_two_letter_func();
  sw04opt1.innerHTML = `${random_two_letters[0]}`
  sw04opt2.innerHTML = `${random_two_letters[1]}`
}

async function random_two_letter_func () {
  random_two_letters = []
  let x = activeUserID[0];
  alert("Return Random Two Letters With Low Scores");
  const result = await fetch(`${USERS_URL}/${x}/letters`)
  const data = await result.json()
  const final_res = await data.forEach(element => {
    random_two_letters.push(element.the_letter);
    });
  return final_res
};

// all of this has been refactored into the random_two_letter_func
// sw04.onclick = function () {
//   random_two_letters = []
//   let x = activeUserID[0];
//   alert("Return Random Two Letters With Low Scores");
//   fetch(`${USERS_URL}/${x}/letters`)
//   .then((response) => {
//     response.json()
//   .then((data) => {data.forEach(element => {
//     random_two_letters.push(element.the_letter);
//     });
//   });
// });
// }



//
//ABOVE THIS LINE IS WORKING
//
//
//

//TESTING


//will need to use the variable random_two_letters from above to update the score
//NEED A FUNCTION TO DETERMINE WHICH IS THE CORRECT LETTER FOR SCORING
//NEED A FUNCTION TO ASK THE USER, RECEIVE THE INPUT
//NEED A FUNCTION TO TO CHECK THE INPUT
//NEED LOGIC FOR IF CORRECT UPDATE SCORE, AND IF WRONG JUST AUTOCYCLE
//ULTIMATELY, THE BUTTON ABOVE AND THIS BUTTON HERE WILL BECOME THE GAME LOOP UNTIL ACTIVATION SWITCHES ARE SCORED UP
const sw05 = document.getElementById('switchboard05')

sw05.onclick = function () {
  random_two_letter_func();
  //alert("Incremeent Score of Random Letter by 1 and Corresponding Word Activation")

}



// NOT YET TESTING BELOW THIS LINE
const sw06 = document.getElementById('switchboard06')
sw06.onclick = function () {
  prompt("Return a Random Two Words if a Word is Activated... or a Random Two Letters")
}

const sw07 = document.getElementById('switchboard07')
sw07.onclick = function () {
  alert("Increment Score of a Random Word by 9")
}

const sw08 = document.getElementById('switchboard08')
sw08.onclick = function () {
  alert("If only one letter left, Return Random Letter with Last Letter in DB")
}

const sw09 = document.getElementById('switchboard09')
sw09.onclick = function () {
  alert("If all letters scored out, Return a Word")
}

const sw10 = document.getElementById('switchboard10')
sw10.onclick = function () {
  alert("If all words scored out... Return Congratulations and delete user")
}

const sw11 = document.getElementById('switchboard11')
sw11.onclick = function () {
  alert("admin Login for Session...autopopulate for now")
}

const sw12 = document.getElementById('switchboard12')
sw12.onclick = function () {
  alert("admin Logout for Session")
}

const sw13 = document.getElementById('switchboard13')
sw13.onclick = function () {
  alert("admin sees readymades index")
}

const sw14 = document.getElementById('switchboard14')
sw14.onclick = function () {
  prompt("admin creates a readymade")
}

const sw15 = document.getElementById('switchboard15')
sw15.onclick = function () {
  prompt("admin updates a readymade")
}

const sw16 = document.getElementById('switchboard16')
sw16.onclick = function () {
  alert("admin deletes a readymade")
}

const sw17 = document.getElementById('switchboard17')
sw17.onclick = function () {
  alert("admin sees spokenmessages index")
}

const sw18 = document.getElementById('switchboard18')
sw18.onclick = function () {
  alert("admin creates a spokenmessage")
}

const sw19 = document.getElementById('switchboard19')
sw19.onclick = function () {
  alert("admin updates a spokenmessage")
}

const sw20 = document.getElementById('switchboard20')
sw20.onclick = function () {
  alert("admin deletes a spokenmessage")
}