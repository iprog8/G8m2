function ExtrageNumerelePare() {
    var listaNumere = [4, 15, 18, 20, 23, 25, 27, 35, 40, 55, 77, 100];
    var listaNumerePare = [];
    for (let i = 0; i < listaNumere.length; i++) {
        if (listaNumere[i] % 2 == 0) {
            listaNumerePare.push(listaNumere[i]);
        }
    }
    alert(listaNumerePare);
}

function ExtrageNumereleMultiplu5() {
    var listaNumere = [4, 15, 18, 20, 23, 25, 27, 35, 40, 55, 77, 100];
    var listaNumereMultiplu5 = [];
    for (let i = 0; i < listaNumere.length; i++) {
        if (listaNumere[i] % 5 == 0) {
            listaNumereMultiplu5.push(listaNumere[i]);
        }
    }
    alert(listaNumereMultiplu5);
}

function CalculeazaSumaNrMaiMiciCa50() {
    var listaNumere = [4, 15, 18, 20, 23, 25, 27, 35, 40, 55, 77, 100];
    var listaNumereleMaiMiciCa50 = [];
    var suma = 0;
    for (let i = 0; i < listaNumere.length; i++) {
        if (listaNumere[i] < 50) {
            listaNumereleMaiMiciCa50.push(listaNumere[i]);
            suma = suma + listaNumere[i];
        }
    }
    alert(listaNumereleMaiMiciCa50);
    alert(suma);
}



