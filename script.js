window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}

function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";
    } else {
        document.querySelector("#menuknap").textContent = "X";
    }
}

document.getElementById('change_emilie').src = 'img/emilie_1.jpg';

//henter element fra id og gør at man kan klikke på den//
document.getElementById('on').addEventListener('click', switchOn);

//henter element fra id og gør at man kan klikke på den//
document.getElementById('off').addEventListener('click', switchOff);

//funktion der kører når man er på on-knap
function switchOn() {
    //Udskriv at du er i denne funtion i consolen
    console.log("switchOn")
    let on = document.getElementById('change_emilie');
    on.src = 'img/emilie_1.jpg';
}

//funktion der kører når man er på off-knap
function switchOff() {
    //Udskriv at du er i denne funtion i consolen
    console.log("switchOff");
    let Off = document.getElementById('change_emilie');
    Off.src = 'img/emilie_2.jpg';
}
