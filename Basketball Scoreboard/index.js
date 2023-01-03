let homescoreEl = document.getElementById("homescore-el")
let homescore = 0
function homescoreAdd1() {
    homescore += 1
    homescoreEl.textContent = homescore
}

function homescoreAdd2() {
    homescore += 2
    homescoreEl.textContent = homescore
}

function homescoreAdd3() {
    homescore += 3
    homescoreEl.textContent = homescore
}

let guestscoreEl = document.getElementById("guestscore-el")
let guestscore = 0 

function guestscoreAdd1() {
    guestscore += 1
    guestscoreEl.textContent = guestscore
}

function guestscoreAdd2() {
    guestscore += 2
    guestscoreEl.textContent = guestscore
}

function guestscoreAdd3() {
    guestscore += 3
    guestscoreEl.textContent = guestscore
}
function zeroStart() {
    homescore = 0
    guestscore = 0
    homescoreEl.textContent = homescore
    guestscoreEl.textContent = guestscore
}