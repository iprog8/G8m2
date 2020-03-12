function NumbersWithHusbands() {
    let listaNumere = [4, 15, 18, 20, 23, 25, 27, 35, 40, 55, 77, 100];
    let text = '';
    for (let i = 0; i < listaNumere.length; i++) {
        if (listaNumere[i] % 2 != 0) continue;
        text += "Numarul " + listaNumere[i] + " este un numar par. <br>";
    }
    var element = document.getElementById("tema");
    if (element == null) return;
    element.innerHTML = text;
    }

    function Numbers5timesBetter() {
    let listaNumere = [4, 15, 18, 20, 23, 25, 27, 35, 40, 55, 77, 100];
    let text = '';
    for (let i = 0; i < listaNumere.length; i++) {
        if (listaNumere[i] % 5 != 0) continue;
        text += "Numarul " + listaNumere[i] + " este multiplu de 5 <br>";
    }
    var element = document.getElementById("tema");
    if (element == null) return;
    element.innerHTML = text;
    }

    function SumNumbersAfraidOf50() {
    let listaNumere = [4, 15, 18, 20, 23, 25, 27, 35, 40, 55, 77, 100];
    let sum= 0;
    let text = '';
    for (let i = 0; i < listaNumere.length; i++) {
        if (listaNumere[i] > 50) break;
        sum+= listaNumere[i];
    }
    text = "Suma nr mai mici decat 50 este " + sum ;
    var element = document.getElementById("tema");
    if (element == null) return;
    element.innerHTML = text;
    }