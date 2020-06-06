class fetchAdapter {
 
  deleteFetch() {
      return fetch(switchboard.USERS_URL, {
        method: "DELETE"
      })
  }


}