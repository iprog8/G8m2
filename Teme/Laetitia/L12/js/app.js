function Clickme() {
    alert("Click meee!!!");
}

function TurnOn() {
    var imagePlace = document.getElementById('lightImg');

    if (imagePlace != null) {
        imagePlace.src = "images/bulbon.png";
        imagePlace.alt = "Becul este aprins";
        imagePlace.title = "Becul este aprins";
    } else {
        console.warn("NU am gasit unde sa pun bec!");
    }
}

function TurnOff() {
    var imagePlace = document.getElementById('lightImg');
    if (imagePlace == null) {
        console.warn("Nu am gasit id-ul lightIm");
    }
    else {
        imagePlace.src = "images/bulboff.png";
        imagePlace.alt = "Becul este stins";
        imagePlace.title = "Becul este stins";
    }
}