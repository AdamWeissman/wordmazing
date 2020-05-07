const currentUser = 0

const BASE_URL = "http://localhost:3000"
const USERS_URL = `${BASE_URL}/api/v1/users`
const WORDS_URL = `${USERS_URL}/${currentUser}/words`


//CREATE A USER -- should also create a session...
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
  
//RETURN A RANDOM USER ... should also return the current session OR the user with the current session
const sw02 = document.getElementById('switchboard02');

sw02.onclick = () => {
  fetch(USERS_URL)
    .then((response) => {
      response.json()
    .then((data) => {alert(data[Math.floor(Math.random() * data.length)].name)});
  });
}
      
//DESTROY THE LAST USER ... should destroy the session.
const sw02a = document.getElementById('switchboard02a');

sw02a.onclick = () => {
  fetch(USERS_URL)
    .then((response) => {
      response.json()
    .then((data) => {alert("Destroyed last user " + data[((data.length) - 1)].id)});
  })

  fetch(USERS_URL, {
    method: "DELETE"
  })
}

//THIS IS ON HOLD UNTIL SESSIONS WORKING ABOVE.


const sw03 = document.getElementById('switchboard03')
const word = document.querySelector('#sw03word');
const theWordData = {};

sw03.addEventListener('submit', (e) => {
  e.preventDefault();
  alert(word.value + ' has been submitted');
  theWordData['the_word'] = word.value
  console.log(theWordData['the_word'])
  fetch(WORDS_URL, {
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




//NOT YET WORKING BELOW THIS COMMENT
// NOT YET BELOW THIS LINE
const sw04 = document.getElementById('switchboard04')
sw04.onclick = function () {
  alert("Return a Random Two Letters")
}

const sw05 = document.getElementById('switchboard05')
sw05.onclick = function () {
  alert("Incremeent Score of Random Letter by 9 and Corresponding Word Activation")
}

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