sw05opt1.addEventListener('click', (e) => {
  let good_job_choice = ["Nice!", "Great!", "Wow!"]
  let goodJob = good_job_choice[Math.floor(Math.random() * good_job_choice.length)]; 
 
 //speak(rightHere=`${goodJob}`);

  let oops_choice = ["Oops!", "Whoops!", "Baah!"]
  let oopsies = oops_choice[Math.floor(Math.random() * oops_choice.length)]; 
 
 //speak(rightHere=${oopsies}`);
  e.preventDefault();
  if (the_correct_choice[0] == sw05opt1.innerHTML) {
    speak(rightHere=`${goodJob}`);
    wait(1000)
    let x = activeUserID[0]
    let y = the_correct_choice[0]
    if (the_correct_choice[0].length === 1) {
    fetch(`${USERS_URL}/${x}/letters/${y}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json", 
        "Accept": "application/json"},
      body: JSON.stringify({
        "the_letter": `${y}` //this line is actually irrelevant because I can use the id from the fetch request
        })
      });
    //.then(response=>response.json())
    //.then(data=>console.log(data))
    set_random_two_letters_or_words_v2();}

    else {
      fetch(`${USERS_URL}/${x}/words/${y}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json", 
        "Accept": "application/json"},
      body: JSON.stringify({
        "the_word": `${y}` //this line is actually irrelevant because I can use the id from the fetch request
        })
      });
    set_random_two_letters_or_words_v2();
    }

  }
  else {
    speak(rightHere=`${oopsies}`);
    wait(1000);
    set_random_two_letters_or_words_v2();
  }
});

sw05opt2.addEventListener('click', (e) => {
  let good_job_choice = ["Nice!", "Great!", "Wow!", "Good!", "Yay!"]
  let goodJob = good_job_choice[Math.floor(Math.random() * good_job_choice.length)]; 
 
 //speak(rightHere=`${goodJob}`);

  let oops_choice = ["Oops!", "Whoops!", "Baah!", "Naah!"]
  let oopsies = oops_choice[Math.floor(Math.random() * oops_choice.length)]; 
 
 //speak(rightHere=${oopsies}`);

  e.preventDefault();
  if (the_correct_choice[0] == sw05opt2.innerHTML) {
    speak(rightHere=`${goodJob}`);
    wait(1000)
    let x = activeUserID[0]
    let y = the_correct_choice[0]
    if (the_correct_choice[0].length === 1) { 
      fetch(`${USERS_URL}/${x}/letters/${y}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json", 
        "Accept": "application/json"},
      body: JSON.stringify({
        "the_letter": `${y}` //this line is actually irrelevant because I can use the id from the fetch request
        })
      })
    //.then(response=>response.json())
    //.then(data=>console.log(data))
    set_random_two_letters_or_words_v2();
    }
    else {fetch(`${USERS_URL}/${x}/words/${y}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json", 
        "Accept": "application/json"},
      body: JSON.stringify({
        "the_word": `${y}` //this line is actually irrelevant because I can use the id from the fetch request
        })
      });
    set_random_two_letters_or_words_v2();
    }

  }
  else {
    speak(rightHere=`${oopsies}`);
    wait(1000);
    set_random_two_letters_or_words_v2();
  }
});