async function activeUser () {
  const result = await fetch(SESSIONS_URL);
  const data = await result.json();
  console.log(data["id"]); // this line is irrelvant, just here for testing
  activeUserID = []
  activeUserID.push(data["id"]);
}

sw03.addEventListener('click', (e) => { //this is such a screwed up fix, but seems to work ... otherwise, the activeUser would not interpolate to the URL unless clicked twice
  activeUser();
});

sw03.addEventListener('submit', (e) => {  
  e.preventDefault(); 
  
  let x = activeUserID[0];
 
  let random_word_choice_praise = [" is a great choice " + `${userName.value}`+"!", " is an awesome pick!", " is just what I was thinking!", " will be a fun word to learn " + `${userName.value}`+"!", " sounds good to me!", " sounds like a plan", " is an excellent choice " + `${userName.value}`+"!"]
  let randomPraise = random_word_choice_praise[Math.floor(Math.random() * random_word_choice_praise.length)]; 
  
  speak(rightHere=`${word.value}` + `${randomPraise}`);

  theWordData['the_word'] = word.value.toUpperCase();
  console.log(theWordData['the_word'])
  
 
  fetch(`${USERS_URL}/${x}/words`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", 
      "Accept": "application/json"},
    body: JSON.stringify({
      "the_word": theWordData['the_word']
      })
    })
  .then(response=>response.json())
  .then(data=>console.log(data))
});