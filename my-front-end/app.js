

// async function random_two_words_func () {
//   random_two_words = []
//   random_two_letters = [] //<--this is so a single completed word won't break the app
//   let x = activeUserID[0];
//   //alert("Return Random Two Letters With Low Scores");

//   try {const result = await fetch(`${USERS_URL}/${x}/words`)
//     const data = await result.json()
//     const the_words = await data.words
//     the_words.forEach(element => {
//     random_two_words.push(element.the_word);
//     if (random_two_words == ["RESET!!!", "RESET!!!"]) {
//       the_whole_thing.innerHTML = `<center><h1>GREAT JOB ${userName.value}</h1></center>`
//       speak(rightHere="Great job " + `${userName.value}`, " you did it!")
//       fetch(USERS_URL, {
//         method: "DELETE"
//       })
//     }
//   });}

//   catch { const result = await fetch(`${USERS_URL}/${x}/letters`)
//     const data = await result.json()
//     const the_letters = await data.letters
//     the_letters.forEach(element => {
//     random_two_letters.push(element.the_letter);
//     if (random_two_letters == ["RESET!!!", "RESET!!!"]) {
//       the_whole_thing.innerHTML = `<center><h1>GREAT JOB ${userName.value}</h1></center>`
//       speak(rightHere="Great job " + `${userName.value}`, " you did it!")
//       fetch(USERS_URL, {
//         method: "DELETE"
//       })
//     }
//   });}
// };

async function check_cycle_now_func () {
  words_and_or_letters = new Set()
  let x = activeUserID[0];
  const result = await fetch(`${USERS_URL}/${x}/letters`)
  const data = await result.json()
    try {
      const the_letters = await data.letters
      const the_words = await data.words
      the_words.forEach(element => {
        if (element.cycle_now === true) {words_and_or_letters.add("words")}
      }),

      the_letters.forEach(element => {
        if (element.cycle_now === true) {words_and_or_letters.add("letters")}
      });
      
      x = Array.from(words_and_or_letters)
      return x
    }

    catch {            
      try {
        const the_words = await data.words
        the_words.forEach(element => {
        if (element.cycle_now === true) {words_and_or_letters.add("words")}
        });
      
      x = Array.from(words_and_or_letters)
      return x
      }

      catch {
        const the_letters = await data.letters
        the_letters.forEach(element => {
        if (element.cycle_now === true) {words_and_or_letters.add("letters")}
        });
        
        x = Array.from(words_and_or_letters)
        return x
      }
    }

}
  //this is basically a clone of the random_two_letters_func_v2, rewritten for letters

  function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }


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


// sw02 and sw02a were used for testing but no longer relevant
//RETURN FAKE SESSION
//const sw02 = document.getElementById('switchboard02');

// sw02.onclick = () => {
//   fetch(SESSIONS_URL)
//     .then((response) => {
//       response.json()
//     .then((data) => {alert(data["id"])});
//   });
// }
      
//DESTROY THE SESSION USER ... should destroy the session.

// sw02a.onclick = () => {
//   activeUserID = [];
//   fetch(SESSIONS_URL)
//     .then((response) => {
//       response.json()
//     .then((data) => {alert("Destroying user " + data["name"])});
//   })

//   fetch(USERS_URL, {
//     method: "DELETE"
//   })
// }