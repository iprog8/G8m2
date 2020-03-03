var imagePlace;
var x=1;

function Aprins() {
    imagePlace = document.getElementById('Light-Bulb');

    if (x==1) {
        imagePlace.src = "images/bulb-on.png";
        imagePlace.alt = "Becul este aprins";
        imagePlace.title = "Becul este aprins";
        x--;
    }
    else {
        if (x==0) {
            imagePlace.src = "images/bulb-off.png";
            imagePlace.alt = "Becul este stins";
            imagePlace.title = "Becul este stins";
            x++;
    }
}
}