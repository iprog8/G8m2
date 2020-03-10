function schimbaculoareaindarkblue() {
    document.getElementById('cos-cumparaturi').style.color = "darkblue";
}
function schimbaculoareainred() {
    document.getElementById('cos-cumparaturi').style.color = "red";
}
function suma() {
    var suma = 31 + 41;
    alert(suma);
}
var imagePlace;

function Switch() {
    imagePlace = document.getElementById('imagepos');
    if (imagePlace.title == "" || imagePlace.title == "Becul este stins") {
        imagePlace.src = "images/bulbon.png";
        imagePlace.alt = "Becul este aprins";
        imagePlace.title = "Becul este aprins";
    }
    else {
        imagePlace.src = "images/bulboff.png";
        imagePlace.alt = 'Becul este stins';
        imagePlace.title = "Becul este stins";
    }
}
