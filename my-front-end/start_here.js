function onetime(node, type, callback) {
	// create event
	node.addEventListener('click', function(e) {
    console.log("just once test")
    fetch(USERS_URL, {
      method: "DELETE"
    })
		// remove event
		node.removeEventListener(e.type, arguments.callee);
		// call handler
		return callback(e);
	});
}

function greeting(e) {
  speak(rightHere = "Hi, I'm Wordmazing.  What's your name?");
  sw01.style.display = "block";
  click2play.style.display = "none"
  prettyMuchEverything.style.display = "block"
  active_and_delete_user.style.display = "none"
  letterselect.style.display = "none"
  wordmaker.style.display = "none"
}

onetime(main, "click", greeting)