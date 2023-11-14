// Chiedere le informazioni di base all'utente
//let kmdapercorrere = prompt("Inserisci i km che vuoi percorrere.")
//if (isNaN(kmdapercorrere)) {
    //alert("Non hai inserito un numero!");
//}
//let eta = prompt("Inserisci la tua età.")
//if (isNaN(eta)) {
    //alert("Non hai inserito un numero!");
//}


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



//document.getElementById("form_data_input").classList.add("d-none");
// E faccio comparire la card con la password generata
document.getElementById("form_data_input").classList.add("d-none");
}
//document.getElementById("prezzofinale").innerHTML = prezzofinale;