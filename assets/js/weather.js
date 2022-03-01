import dayChart from './day.js';

const APIKEY = 'YOUR API KEY';
let APIResults;

const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temperature')
const city = document.querySelector('.city')
const hour = document.querySelectorAll('.hour');
const tempForHour = document.querySelectorAll('.hour-temp');
const day = document.querySelectorAll('.day');
const tempForDay = document.querySelectorAll('.day-temp')
const weatherIcon = document.querySelector('.weather-icon')
const loading = document.querySelector('.overlay-loading')

if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {

        // récupère la position
        let lon = position.coords.longitude;
        let lat = position.coords.latitude;
        appelAPI(lon, lat)

    }, () => {
        alert("You have refused geolocation, so the weather application cannot work.")
    })
}

function appelAPI(lon, lat) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&lang=fr&appid=${APIKEY}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // stock les donner envoyé par l'API
        APIResults = data;

        //  ajoute les data dans le bloc primaire
        weather.innerText = APIResults.current.weather[0].description;
        temperature.innerText = `${Math.trunc(APIResults.current.temp)}°`;
        city.innerText = APIResults.timezone;

        let currentTime = new Date().getHours();

        //  ajoute les heures
        for(let i = 0; i < hour.length; i++) {
            let hourIncr = currentTime + i * 2;

            if(hourIncr > 24) {
                hour[i].innerText = `${hourIncr - 24} h`;
            }else if (hourIncr === 24) {
                hour[i].innerText = "00 h";
            }else {
                hour[i].innerText = `${hourIncr} h`;
            }
        }

        //  ajoute les degrets pour les heures
        for(let j = 0; j < tempForHour.length; j++) {
            tempForHour[j].innerText = `${Math.trunc(APIResults.hourly[j * 2].temp)}°`;
        }

        //  ajoute les jours
        for(let k = 0; k < dayChart.length; k++) {
            day[k].innerText = dayChart[k].slice(0, 3);
        }

        //  ajoute les degret pour les jours
        for(let l = 0; l < 7; l++) {
            tempForDay[l].innerText = `${Math.trunc(APIResults.daily[l+1].temp.day)}°`
        }

        //  ajoute l'icone de météo
        if(currentTime >= 7 && currentTime <= 20) {
            weatherIcon.src = `assets/img/day/${APIResults.current.weather[0].icon}.svg`
        } else {
            weatherIcon.src = `assets/img/night/${APIResults.current.weather[0].icon}.svg`
        }

        // enlève l'image de chargement
        loading.classList.add('hidden')
    })
}