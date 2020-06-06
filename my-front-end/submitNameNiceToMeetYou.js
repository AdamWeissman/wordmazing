sw01.addEventListener('submit', (e) => {
  e.preventDefault();
  //alert(userName.value + ' submitted the form');
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
  sw01.style.display = "none";
  talker.speak("Nice to meet you " + (`${theUserData['name']}. ` + "Enter some words to play. When you're done, click finished."))
  wordmaker.style.display = "block"
}
);
