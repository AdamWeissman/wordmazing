const BASE_URL = "http://localhost:3000"
const USERS_URL = `${BASE_URL}/api/v1/users`

//NEED TO GET THE BACKEND CONNECTED TO THE FRONT END
const sw01 = document.getElementById('switchboard01');
const userName = document.querySelector('#sw01name');
const theFormData = {};

sw01.addEventListener('submit', (e) => {
  e.preventDefault();
  alert(userName.value + ' submitted the form');
  theFormData['name'] = userName.value
  console.log(theFormData['name'])

  fetch(USERS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",},
    body: theFormData['name']
  });
});

//GET DATA (THE FRONT END IS CONNECTED TO THE BACK END)
const sw02 = document.getElementById('switchboard02');

sw02.onclick = () => {
  fetch(USERS_URL)
    .then((response) => {
      response.json()
    .then((data) => {alert(data[Math.floor(Math.random() * data.length)].name)});
  });
}
      

//NOT YET WORKING BELOW THIS COMMENT
// NOT YET BELOW THIS LINE


const sw03 = document.getElementById('switchboard03')
sw03.onclick = function () {
  prompt("Enter a Word")
}

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