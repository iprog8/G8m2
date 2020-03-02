var imagePlace;

function ClickMe() {
    alert("Click me!!!!");
}

function TurnOn() {
    imagePlace = document.getElementById('lightImg');

    if (imagePlace != null) {
        imagePlace.src = "images/bulbon.png";
        imagePlace.alt = "Becul este aprins";
        imagePlace.title = "Becul este aprins";
    }
    else {
        console.warn('NU am gasit unde se pun becul.');
    }
}

function TurnOff() {
    imagePlace = document.getElementById('lightImg');
    if (imagePlace == null) {
        console.warn('Nu am gasit id-ul lightIm');
    }
    else {
        imagePlace.src = "images/bulboff.png";
        imagePlace.alt = 'Becul este stins';
        imagePlace.title = "Becul este stins";
    }
}

function TurnDay() {
    //TurnOn();
    var bodys = document.getElementsByTagName('body');
    bodys[0].classList.add('day');
    bodys[0].classList.remove('night');
}

function TurnNight() {
    var bodys = document.getElementsByTagName('body');

    bodys[0].classList.add('night');
    bodys[0].classList.remove('day');
}

function Tunr() {
    var divs = document.getElementsByClassName('class-selector');

}