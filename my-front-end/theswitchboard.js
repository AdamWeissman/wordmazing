class SwitchBoard {
  constructor () {
    this.BASE_URL = "http://localhost:3000"
    this.USERS_URL = `${this.BASE_URL}/api/v1/users`
    this.SESSIONS_URL = `${this.USERS_URL}/active_session`

    this.main = document.querySelector('main')
    this.click2play = document.querySelector('click2play')
    this.prettyMuchEverything = document.querySelector('prettyMuchEverything')
    this.letterselect = document.querySelector('letterselect')
    this.wordmaker = document.querySelector('wordmaker')
    this.active_and_delete_user = document.querySelector('active_and_delete_user')

    this.sw02 = document.getElementById('switchboard02');
    this.sw02a = document.getElementById('switchboard02a');

    this.sw03 = document.getElementById('switchboard03')
    this.word = document.querySelector('#sw03word');

    this.sw05 = document.getElementById('switchboard05')
    this.sw05matchMe = document.getElementById('swb05matchThis')
    this.sw05opt1 = document.getElementById('swb05option1')
    this.sw05opt2 = document.getElementById('swb05option2')
    this.the_whole_thing = document.body
  }
}

const switchboard = new SwitchBoard()

class UserButtons {
  constructor () {
    this.sw01 = document.getElementById('switchboard01');
    this.userName = document.querySelector('#sw01name');
    this.theUserData = {};
    this.theWordData = {};
    this.activeUserID = []; 
  }
}

const userButtons = new UserButtons()


userButtons.sw01.style.display = "none";
switchboard.prettyMuchEverything.style.display = "none"


// const BASE_URL = "http://localhost:3000"
// const USERS_URL = `${BASE_URL}/api/v1/users`
// const SESSIONS_URL = `${USERS_URL}/active_session`

//CREATE A USER 
// const sw01 = document.getElementById('switchboard01');
// const userName = document.querySelector('#sw01name');
// const theUserData = {};

//PREP STUFF, CLICK TO PLAY SCREEN, WHAT SHOULD AND SHOULDN'T APPEAR PRIOR TO MAIN GAME LOOP
// const main = document.querySelector('main')
// const click2play = document.querySelector('click2play')
// const prettyMuchEverything = document.querySelector('prettyMuchEverything')
// const letterselect = document.querySelector('letterselect')
// const wordmaker = document.querySelector('wordmaker')
// const active_and_delete_user = document.querySelector('active_and_delete_user')

// const sw02 = document.getElementById('switchboard02');
// const sw02a = document.getElementById('switchboard02a');

// const sw03 = document.getElementById('switchboard03')
// const word = document.querySelector('#sw03word');
// const theWordData = {};
// let activeUserID = []; 

// const sw05 = document.getElementById('switchboard05')
// const sw05matchMe = document.getElementById('swb05matchThis')
// const sw05opt1 = document.getElementById('swb05option1')
// const sw05opt2 = document.getElementById('swb05option2')
// const the_whole_thing = document.body