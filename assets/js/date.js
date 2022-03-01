const dates = document.querySelector('.dates');

let dt = new Date();
let options = {weekday: "long", day: "2-digit", month: "numeric", year: "numeric"};
let date = dt.toLocaleDateString('fr-FR', options);

// ajoute la date au format 'jour jj/mm/aaaa'
dates.innerText = `${date}`;