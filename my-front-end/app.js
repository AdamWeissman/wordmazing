// this file isn't fully active yet, there's much to refactor after starthere.js

const switchboard = new SwitchBoard()
const userButtons = new UserButtons()
const fetchDoggy = new fetchAdapter() //this is from adapters.js

userButtons.sw01.style.display = "none";
switchboard.prettyMuchEverything.style.display = "none"

//comment out the above from theswitchboard.js

onetime(switchboard.main, "click", greeting)

//comment out the above from starhere.js