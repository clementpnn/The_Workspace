const weekday = ['Lunid', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

let td = new Date();
let option = {weekday : 'long'};
let today = td.toLocaleDateString('fr-FR', option);

// coupe le tableau pour rajouter le début à la fin
let dayChart = weekday.slice(weekday.indexOf(today)).concat(weekday.slice(0, weekday.indexOf(today)));

export default dayChart;