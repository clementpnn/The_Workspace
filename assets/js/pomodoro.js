const timeWork = document.querySelector('.time-work');
const timeRest = document.querySelector('.time-break');
const btnStart = document.querySelector('.b1');
const btnStop = document.querySelector('.b2');
const btnReset = document.querySelector('.b3');

let checkStart = false;
let timerWork = 1500;
let timerBreak = 300;
let halt = false;
let nbloop = 0;

// aficher les minutes et faire une opération ternaire pour rajouter un zéro si le nombre de seconde est infférieur à 10
timeWork.innerText = `${Math.trunc(timerWork/60)} : ${(timerWork % 60 < 10) ? `0${timerWork % 60}` : timerWork % 60}`;
timeRest.innerText = `${Math.trunc(timerBreak/60)} : ${(timerBreak % 60 < 10) ? `0${timerBreak % 60}` : timerBreak % 60}`;

btnStart.addEventListener('click', () => {

    if(checkStart === false){

        checkStart = true

        timerWork--;
        timeWork.innerText = `${Math.trunc(timerWork/60)} : ${(timerWork % 60 < 10) ? `0${timerWork % 60}` : timerWork % 60}`;

        let timer = setInterval(() => {

            // décrémente si le timer n'est pas déjat entrain de décrémenter
            if(halt === false && timerWork > 0) {

                timerWork--;
                timeWork.innerText = `${Math.trunc(timerWork/60)} : ${(timerWork % 60 < 10) ? `0${timerWork % 60}` : timerWork % 60}`;

            } else if(halt === false && timerBreak === 0 && timerWork === 0) {

                // retour à létat d'origine
                timerWork = 1500;
                timerBreak= 300;
                timeWork.innerText = `${Math.trunc(timerWork/60)} : ${(timerWork % 60 < 10) ? `0${timerWork % 60}` : timerWork % 60}`;
                timeRest.innerText = `${Math.trunc(timerBreak/60)} : ${(timerBreak % 60 < 10) ? `0${timerBreak % 60}` : timerBreak % 60}`;

            } else if(halt === false && timerWork === 0) {

                // décrémente le temps de repos
                timerBreak--;
                timeRest.innerText = `${Math.trunc(timerBreak/60)} : ${(timerBreak % 60 < 10) ? `0${timerBreak % 60}` : timerBreak % 60}`;
            }
        }, 1000)

        btnReset.addEventListener('click', () => {

            // retour à létat d'origine
            clearInterval(timer);
            checkStart = false;
            timerWork = 1500;
            timerBreak = 300;
            timeWork.innerText = `${Math.trunc(timerWork/60)} : ${(timerWork % 60 < 10) ? `0${timerWork % 60}` : timerWork % 60}`;
            timeRest.innerText = `${Math.trunc(timerBreak/60)} : ${(timerBreak % 60 < 10) ? `0${timerBreak % 60}` : timerBreak % 60}`;
        })
    
    } else {
        return;
    }

})

btnStop.addEventListener('click', () => {

    // change le texte suivant l'état
    if(halt === false){
        btnStop.innerText = "Play"
    } else {
        btnStop.innerText = "Stop"
    }
    halt = !halt;
})