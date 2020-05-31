const BASE_URL = "http://localhost:3000"
const USERS_URL = `${BASE_URL}/api/v1/users`
const SESSIONS_URL = `${USERS_URL}/active_session`


//CREATE A USER 
const sw01 = document.getElementById('switchboard01');
const userName = document.querySelector('#sw01name');
const theUserData = {};

//PREP STUFF, CLICK TO PLAY SCREEN, WHAT SHOULD AND SHOULDN'T APPEAR PRIOR TO MAIN GAME LOOP
const main = document.querySelector('main')
const click2play = document.querySelector('click2play')
const prettyMuchEverything = document.querySelector('prettyMuchEverything')
const letterselect = document.querySelector('letterselect')
const wordmaker = document.querySelector('wordmaker')
const active_and_delete_user = document.querySelector('active_and_delete_user')

sw01.style.display = "none";
prettyMuchEverything.style.display = "none"

const sw02 = document.getElementById('switchboard02');
const sw02a = document.getElementById('switchboard02a');

const sw03 = document.getElementById('switchboard03')
const word = document.querySelector('#sw03word');
const theWordData = {};
let activeUserID = []; 

const sw05 = document.getElementById('switchboard05')
const sw05matchMe = document.getElementById('swb05matchThis')
const sw05opt1 = document.getElementById('swb05option1')
const sw05opt2 = document.getElementById('swb05option2')
const the_whole_thing = document.body