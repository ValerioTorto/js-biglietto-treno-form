// Chiedere le informazioni di base all'utente
if (isNaN(kmdapercorrere)) {
    ("Non hai inserito un numero!");
}
if (isNaN(eta)) {
    alert("Non hai inserito un numero!");
}


// Elaborazione delle statistiche

function userHasFinishDataCompletion(event) {
    event.preventDefault();


    let name = document.getElementById("name").value;
    let kmdapercorrere = document.getElementById("kmdapercorrere").value;
    let eta = document.getElementById("eta").value;
    let prezzokm = kmdapercorrere * 0.21;

if (eta = "Minorenne") {
    prezzokm = prezzokm - (prezzokm * 0.2);
}
else if (eta = "65+") {
    prezzokm = prezzokm - (prezzokm * 0.4);
}

let prezzofinale = prezzokm.toFixed(2);




}