const switchboard = new SwitchBoard()
const userButtons = new UserButtons()

userButtons.sw01.style.display = "none";
switchboard.prettyMuchEverything.style.display = "none"

//comment out the above from theswitchboard.js

onetime(switchboard.main, "click", greeting)

//comment out the above from starhere.js