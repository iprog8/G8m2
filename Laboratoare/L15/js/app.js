function RepetaDescrescator() {
    let listaProduse = ["mere", "pere", "nuci", "alune"];
    for (let i = listaProduse.length - 1; i >= 0; i--) {
        console.log(listaProduse[i]);
    }
}

function RepetaCrescator() {
    let listaProduse = ["mere", "pere", "nuci", "alune"];
    for (i in listaProduse) {
        console.log(listaProduse[i]);
    }

    // for (let i = 0; i < listaProduse.length; i++) {
    //     console.log(listaProduse[i]);
    // }
}

function While() {
    var i = 0;
    var text = "";
    while (i < 0) {
        text += "<br> Numarul " + i;
        i++;
    }
    var element = document.getElementById("listaWhile");
    if (element == null) return;
    element.innerHTML = text;
}

function DoWhile() {
    let i = 0;
    let text = "";
    do {
        text += "<br> Numarul " + i;
        i++;
    } while (i < 0);
    var element = document.getElementById("listaWhile");
    if (element == null) return;
    element.innerHTML = text;
}

function While2() {
    var text = "";
    let date = new Date();
    while (date.getMilliseconds() < 100) {
        text += " Miliseconds = " + date.getMilliseconds() + "<br/>";
        var element = document.getElementById("listaWhile");
    }
    var element = document.getElementById("listaWhile");
    if (element == null) return;
    element.innerHTML = text;
}

function ForBreak() {
    let listaNumere = [1, 3, 4, 5, 7, 8, 10, 23];
    let numarCautat = 4;
    let amGasitNumarul = false;
    for (let i = 0; i < listaNumere.length; i++) {
        if (listaNumere[i] == numarCautat) {
            amGasitNumarul = true;
            break;
        }
    }
    //aici ne scoate break
    var element = document.getElementById("listaWhile");
    if (element == null) return;
    element.innerHTML = amGasitNumarul;
}

function ForContinue() {
    let listaNumere = [1, 3, 4, 5, 7, 8, 10, 23];
    let text = '';
    //afisez numere pare
    for (let i = 0; i < listaNumere.length; i++) {
        if (listaNumere[i] % 2 != 0) continue;
        text += "Numarul " + listaNumere[i] + " este un numar par. <br>";
    }
    var element = document.getElementById("listaWhile");
    if (element == null) return;
    element.innerHTML = text;
}

function incrementareI() {
    let i = 5;
    i++;
    ++i;
    let a = i++;
    // a = i; i = i + 1;
    let b = ++i;
    // i = i + 1; b = i;
    console.log(a);
    console.log(b);
    console.log(i);
}

