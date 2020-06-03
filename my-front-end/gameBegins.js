sw05matchMe.addEventListener('click', (e) => {
  speak(rightHere=`${sw05matchMe.innerHTML}`)
})

function clickMatchMe() {
  sw05matchMe.click()
}


sw05.onclick = function () {
    set_random_two_letters_or_words_v2();
    wordmaker.style.display = "none"
    letterselect.style.display = "block"
}