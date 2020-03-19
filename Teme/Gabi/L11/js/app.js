function color() {
    var x = document.getElementsByTagName('div');
    var y;
    for (y = 0; y < x.length; y++) {
        x[y].style.color = "blue";
    }
}

function divclass() {
    var x = document.getElementsByTagName('div');
    var i = 0;
    var text = "";
    while (i < x.length) {
        text += "<br> Div ul cu nr " + i + " este " + x[i].classList;
        i++;
        if (x[i].classList == "") {
            text += "<br> Div ul cu nr " + i + " este - ";
            i++
        }
    }
    var show_divs = document.getElementById('divs');
    if (show_divs == null) {
        return;
    }
    show_divs.innerHTML = text;
}
function numerePare() {
    let listNum = [4, 15, 18, 20, 23, 25, 27, 35, 40, 55, 77, 100];
    let text = "";
    for (let i = 0; i < listNum.length; i++) {
        if (listNum[i] % 2 == 0) {
            text += "Numerele pare sunt: " + listNum[i] + "<br>";
        }
        let box = document.getElementById('nrpare');
        if (box == null) {
            return;
        }
        box.innerHTML = text;
    }
}
function numerediv5() {
    let listNum = [4, 15, 18, 20, 23, 25, 27, 35, 40, 55, 77, 100];
    let text = "";
    for (let i = 0; i < listNum.length; i++) {
        if (listNum[i] % 5 == 0) {
            text += "Numere divizibile cu 5 sunt: " + listNum[i] + "<br>";
        }
        let box = document.getElementById('nrdiv5');
        if (box == null) {
            return;
        }
        box.innerHTML = text;
    }
}
function sumanr50() {
    let listNum = [4, 15, 18, 20, 23, 25, 27, 35, 40, 55, 77, 100];
    let suma = 0;
    for (let i = 0; i < listNum.length; i++) {
        if (listNum[i] < 50) {
            suma += listNum[i];
        }
        let text = "Suma numerelor mai mici ca 50 este: " + suma;
        let box = document.getElementById('sumanr50');
        if (box == null) {
            return;
        }
        box.innerHTML = text;
    }
}