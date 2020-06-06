
function onetime(node, type, callback) {
	// create event
	node.addEventListener('click', function(e) {
    console.log("just once test")
    fetchDoggy.deleteFetch()
    // fetch(switchboard.USERS_URL, {
    //   method: "DELETE"
    // })
		// remove event
		node.removeEventListener(e.type, arguments.callee);
		// call handler
		return callback(e);
	});
}

function greeting(e) {
  talker.speak("Hi, I'm Wordmazing.  What's your name?");
  userButtons.sw01.style.display = "block";
  switchboard.click2play.style.display = "none"
  switchboard.prettyMuchEverything.style.display = "block"
  switchboard.active_and_delete_user.style.display = "none"
  switchboard.letterselect.style.display = "none"
  switchboard.wordmaker.style.display = "none"
}

onetime(switchboard.main, "click", greeting)