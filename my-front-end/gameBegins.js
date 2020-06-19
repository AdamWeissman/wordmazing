switchboard.sw05matchMe.addEventListener('click', async () => {
  let x = userButtons.activeUserID[0]
  talker.speak(`${switchboard.sw05matchMe.innerHTML}`)
  let response = await fetchDoggy.getFetchWordsForFlatiron(x)
  let data = await response.json()
  console.log(data)
})

function clickMatchMe() {
  switchboard.sw05matchMe.click()
}

switchboard.sw05.onclick = function () {
    set_random_two_letters_or_words_v2();
    switchboard.wordmaker.style.display = "none"
    switchboard.letterselect.style.display = "block"
}