window.addEventListener("load", sidenVises)

//Når siden er loaded kald functionen sidenVises

function sidenVises() {
    //Udskriv at du er i denne funtion i consolen
    console.log("sidenVises");
    //Kald startGame functionen
    startGame();
}

function startGame() {
    //Udskriv at du er i denne funtion i consolen
    console.log("startGame");
    //Gør så man kan klikke på #man vælger
    document.querySelector("#js_sprite").addEventListener("click", clickRotation);
}

function clickRotation() {
    //Udskriv at du er i denne funtion i consolen
    console.log("clickRotation");
    //tilføj classen forsvind til this
    this.classList.add("rotation");
    this.removeEventListener("click", clickRotation);
}

//Initialize the default bulb
document.getElementById('change_emilie').src = 'img/emilie_1.jpg';

//Grab on the switch on btn and add an event(click)
document.getElementById('on').addEventListener('click', switchOn);

//Grab on the switch off btn and add an event(click)
document.getElementById('off').addEventListener('click', switchOff);

//Runs when the switch on button is clicked
function switchOn() {
    let on = document.getElementById('change_emilie');
    on.src = 'img/emilie_1.jpg';
}

//Runs when the switch off button is clicked
function switchOff() {
    let Off = document.getElementById('change_emilie');
    Off.src = 'img/emilie_2.jpg';
}
