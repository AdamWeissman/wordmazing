userButtons.sw01.addEventListener('submit', (e) => {
  e.preventDefault();
  //alert(userName.value + ' submitted the form');
  userButtons.theUserData['name'] = userButtons.userName.value
  console.log(userButtons.theUserData['name'])
    fetchDoggy.userPostFetch()
  // fetch(switchboard.USERS_URL, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json", 
  //     "Accept": "application/json"},
  //   body: JSON.stringify({
  //     "name": userButtons.theUserData['name']
  //     })
  //   })
  .then(response=>response.json())
  .then(data=>console.log(data))
  userButtons.sw01.style.display = "none";
  talker.speak("Nice to meet you " + (`${userButtons.theUserData['name']}. ` + "Enter some words to play. When you're done, click finished."))
  switchboard.wordmaker.style.display = "block"
}
);
