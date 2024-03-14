
//Pulsanti di riproduzione
const distanceButton = document.getElementById("distance");
const wolvesButton = document.getElementById("wolves");
const tempestButton = document.getElementById("tempest");

//pulsante di controllo player
const playButton = document.getElementById("pause");
let playButtonIMG = document.getElementById("pause-img");

//Audio
let distance = document.getElementById("distance-audio");
let wolves = document.getElementById("wolves-audio");
let tempest = document.getElementById("tempest-audio");

//Variabili di controllo per il player
let distancePlaying = false;
let wolvesPlaying = false;
let tempestPlaying = false;

//Bottone di pausa/riproduzione
playButton.addEventListener("click", function () {
    if (wolvesPlaying || distancePlaying || tempestPlaying) {
        if (wolvesPlaying) {
            wolves.pause();
            wolvesPlaying = false;
            let holdWolves = true;
            playButtonIMG.src = "assets/images/play.png";

        } else if (distancePlaying) {
            distance.pause();
            distancePlaying = false;
            let holdDistance = true;
            playButtonIMG.src = "assets/images/play.png";

        } else if (tempestPlaying) {
            tempest.pause();
            tempestPlaying = false;
            let holdTempest = true;
            playButtonIMG.src = "assets/images/play.png";
        }
    } else if (holdWolves) {
        wolves.play();
    } else if (holdDistance) {
        distance.play();
    } else if (holdTempest) {
        tempest.play();
    }
});

//Gestione dei pulsanti
distanceButton.addEventListener("click", function () {
    if (!wolvesPlaying && !tempestPlaying) {
        distance.play();
        distancePlaying = true;
        playButtonIMG.src = "assets/images/pause.png"
    } else {
        if (!wolvesPlaying) {
            wolves.pause();
            wolvesPlaying = false;
        } else {
            tempest.pause();
            tempestPlaying = false;
        }
    }
});

