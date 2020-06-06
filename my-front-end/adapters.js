class fetchAdapter {
 
  deleteFetch() {
      return fetch(switchboard.USERS_URL, {
        method: "DELETE"
      })
  }

  userPostFetch() {
    return fetch(switchboard.USERS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", 
      "Accept": "application/json"},
    body: JSON.stringify({
      "name": userButtons.theUserData['name']
      })
    })}

    getSessionsFetch () {
      return fetch(switchboard.SESSIONS_URL)
    }

    postFetchWords (x) {
      return fetch(`${switchboard.USERS_URL}/${x}/words`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
          "Accept": "application/json"},
        body: JSON.stringify({
          "the_word": userButtons.theWordData['the_word']
          })
        })
    }

    getFetchLetters (x) {
      return fetch(`${switchboard.USERS_URL}/${x}/letters`)
    }

    getFetchWords (x) {
      return fetch(`${switchboard.USERS_URL}/${x}/words`)
    }

    patchFetchLetters(x,y) {
      return fetch(`${switchboard.USERS_URL}/${x}/letters/${y}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json", 
          "Accept": "application/json"},
        body: JSON.stringify({
          "the_letter": `${y}` //this line is actually irrelevant because I can use the id from the fetch request
          })
        });
    }

    patchFetchWords(x,y) {
      return fetch(`${switchboard.USERS_URL}/${x}/words/${y}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json", 
          "Accept": "application/json"},
        body: JSON.stringify({
          "the_word": `${y}` //this line is actually irrelevant because I can use the id from the fetch request
          })
        });
      }
  }


const fetchDoggy = new fetchAdapter()