switchboard.sw05matchMe.addEventListener('click', (e) => {
  talker.speak(`${switchboard.sw05matchMe.innerHTML}`)
})

function clickMatchMe() {
  switchboard.sw05matchMe.click()
}

switchboard.sw05.onclick = function () {
    set_random_two_letters_or_words_v2();
    switchboard.wordmaker.style.display = "none"
    switchboard.letterselect.style.display = "block"
}