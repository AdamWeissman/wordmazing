switchboard.sw05matchMe.addEventListener('click', async () => {
  talker.speak(`${switchboard.sw05matchMe.innerHTML}`)
})

function clickMatchMe() {
  switchboard.sw05matchMe.click()
}

switchboard.sw05.onclick = async function () {
    let x = userButtons.activeUserID[0]
    let response = await fetchDoggy.getFetchWordsForFlatiron(x)
    let data = await response.json()
    alert("these are all your words " + data.sort())
    set_random_two_letters_or_words_v2();
    switchboard.wordmaker.style.display = "none"
    switchboard.letterselect.style.display = "block"
}