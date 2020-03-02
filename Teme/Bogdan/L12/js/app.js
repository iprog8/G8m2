var ImagePlace

function Cosgol() {
    ImagePlace = document.getElementById("Shopping-Cart")

    if (ImagePlace == null) {
        console.warn ('Nu am gasit id-ul Shopping-Cart')
    }
    else {
        ImagePlace.src = 'images/Shopping-Cart-1.png';
        ImagePlace.alt = 'Cosul este gol';
        ImagePlace.title = 'Cosul este gol';
    }
    var bodys = document.getElementsByTagName('body');
    bodys[0].classList.add('Cos-gol');
    bodys[0].classList.remove('Cos-plin');
}

function Cosplin() {
    ImagePlace = document.getElementById("Shopping-Cart")

    if (ImagePlace != null) {
        ImagePlace.src = 'images/Shopping-Cart-2.png';
        ImagePlace.alt = 'Cosul este plin';
        ImagePlace.title = 'Cosul este plin';
    }
    else {
        console.warn ('Nu am gasit id-ul Shopping-Cart')
    }
    var bodys = document.getElementsByTagName('body');
    bodys[0].classList.add('Cos-plin');
    bodys[0].classList.remove('Cos-gol');
}


var Text

function Textsilver() {
    
}
