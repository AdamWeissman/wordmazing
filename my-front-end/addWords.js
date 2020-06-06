async function activeUser () {
  const result = await fetch(switchboard.SESSIONS_URL);
  const data = await result.json();
  console.log(data["id"]); // this line is irrelvant, just here for testing
  userButtons.activeUserID = []
  userButtons.activeUserID.push(data["id"]);
}

switchboard.sw03.addEventListener('click', (e) => { //this is such a screwed up fix, but seems to work ... otherwise, the activeUser would not interpolate to the URL unless clicked twice
  activeUser();
});

switchboard.sw03.addEventListener('submit', (e) => {  
  e.preventDefault(); 
  
  let x = userButtons.activeUserID[0];
 
  let random_word_choice_praise = [" is a great choice " + `${userButtons.userName.value}`+"!", " is an awesome pick!", " is just what I was thinking!", " will be a fun word to learn " + `${userButtons.userName.value}`+"!", " sounds good to me!", " sounds like a plan", " is an excellent choice " + `${userButtons.userName.value}`+"!"]
  let randomPraise = random_word_choice_praise[Math.floor(Math.random() * random_word_choice_praise.length)]; 
  
  talker.speak(`${switchboard.word.value}` + `${randomPraise}`);

  userButtons.theWordData['the_word'] = switchboard.word.value.toUpperCase();
  console.log(userButtons.theWordData['the_word'])
  
 
  fetch(`${switchboard.USERS_URL}/${x}/words`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", 
      "Accept": "application/json"},
    body: JSON.stringify({
      "the_word": userButtons.theWordData['the_word']
      })
    })
  .then(response=>response.json())
  .then(data=>console.log(data))
});