
let homeScoreBtn01 = document.getElementById("home-btn-1");
let homeScoreBtn02 = document.getElementById("home-btn-2");
let homeScoreBtn03 = document.getElementById("home-btn-3");
let homeStore = document.getElementById("home-score");
let homeScore = 0;

function plusOneHome() {
    homeScore += 1;
    homeStore.textContent = homeScore;
}
function plusTwoHome() {
    homeScore += 2;
    homeStore.textContent = homeScore;
}
function plusThreeHome() {
    homeScore += 3;
    homeStore.textContent = homeScore;
}

let guestScoreBtn01 = document.getElementById("guest-btn-1");
let guestScoreBtn02 = document.getElementById("guest-btn-2");
let guestScoreBtn03 = document.getElementById("guest-btn-3");
let guestStore = document.getElementById("guest-score");
let guestScore = 0;

function plusOneGuest() {
    guestScore += 1;
    guestStore.textContent = guestScore;
}
function plusTwoGuest() {
    guestScore += 2;
    guestStore.textContent = guestScore;
}
function plusThreeGuest() {
    guestScore += 3;
    guestStore.textContent = guestScore;
}

let newGame = document.getElementById("new-game-btn");
function refreshScore() {
    zeroGuestScore = 0;
    zeroHomeScore = 0;
    guestScore = zeroGuestScore;
    homeScore = zeroHomeScore;
    homeStore.textContent = homeScore;
    guestStore.textContent = guestScore;
}
