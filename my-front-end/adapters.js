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


}

const fetchDoggy = new fetchAdapter()