
function ValideazaCNP() {
    var Rezultat = document.getElementById('rezultatvalidare');
    var cnpElement = document.getElementById('cnp');
    var cnp = cnpElement.value;
    if (VerificareCNP(cnp)) {
        if (ValidarePrimaCifra(cnp)) {
            if (ValidareAn(cnp)) {
                if (ValidareLunaSiZi(cnp)) {
                    if (ValidareJudet(cnp)) {
                        if (ValidareNumarDeOrdine(cnp)) {
                            if (ValidareCifraDeControl(cnp)) {
                                Rezultat.innerHTML = '<span class="alert alert-success"> CNP valid </span>'
                            }
                            else {
                                Rezultat.innerHTML = '<span class="alert alert-warning"> Cifra de control nu este buna </span>'
                            }
                        }
                        else {
                            Rezultat.innerHTML = '<span class="alert alert-warning"> Numarul de ordine nu este bun! </span>'
                        }
                    }
                    else {
                        Rezultat.innerHTML = '<span class="alert alert-warning"> Judetul nu este bun </span>'
                    }
                }
                else {
                    Rezultat.innerHTML = '<span class="alert alert-warning"> Luna nu este buna! </span>'
                }
            }
            else {
                Rezultat.innerHTML = '<span class="alert alert-warning"> Anul nu este bun </span>'
            }
        }
        else {
            Rezultat.innerHTML = '<span class="alert alert-warning"> Prima litera nu este buna! </span>'
        }
    }
    else {
        Rezultat.innerHTML = '<span class="alert alert-warning"> Numarul nu are 13 cifre sau are si litere </span>'
    }
}

function VerificareCNP(cnp) {
    if (isNaN(cnp)) {
        //console.log('cnp ul nu contine doar cifre');
        return false;
    }
    if (cnp.length != 13) {
        //console.log('cnp-ul nu are 13 cifre');
        return false;
    }
    //console.log('cnp ul are 13 cifre si este numar');
    return true;
}

function ValidarePrimaCifra(cnp) {
    if ((cnp[0] != 1) && (cnp[0] != 2) && (cnp[0] != 5) && (cnp[0] != 6)) {
        //console.log('prima cifra nu este bun');
        return false;
    }
    //console.log('prima cifra este bun');
    return true;
}

function ValidareAn(cnp) {
    var An = "";
    An = cnp[1] + cnp[2];
    //console.log(An);
    if (An == "00") {
        console.log('anul nu este bun');
        return false;
    }
    //console.log('anul este bun');
    return true;
}

function ValidareLunaSiZi(cnp) {
    var Zi = "";
    var Luna = "";
    Zi = cnp[5] + cnp[6];
    Luna = cnp[3] + cnp[4];
    //console.log(Zi);
    //console.log(Luna);
    if (Luna < "01" || Luna > "12") {
        //console.log('luna nu este buna');
        return false;
    }
    if (Zi < "01" || Zi > "31") {
        //console.log("ziua nu este buna");
        return false;
    }
    if ((Luna == "04") || (Luna == "06") || (Luna == "09") || (Luna == "11")) {
        if (Zi < "01" || Zi > "30") {
            //console.log('ziua si luna nu sunt mana in mana');
            return false;
        }
    }
    else if (Luna == "02") {
        if (Zi < "01" || ((Zi > "28") && (Zi > "29"))) {
            //console.log('ziua si luna nu sunt bune');
            return false;
        }
    }
    //console.log('luna si ziua sunt bune');
    return true;
}

function ValidareJudet(cnp) {
    var judet = "";
    judet = cnp[7] + cnp[8];
    //console.log(judet);
    if (judet < "01" || judet > "52") {
        console.log('judetul nu este bun');
        return false;
    }
    //console.log('judetul este bun');
    return true;
}

function ValidareNumarDeOrdine(cnp) {
    var numarOrdine = "";
    numarOrdine = cnp[9] + cnp[10] + cnp[11];
    //console.log(numarOrdine);
    if (numarOrdine < "001") {
        console.log('numarul de ordine nu este bun');
        return false;
    }
    // console.log('numarul de ordine este bun');
    return true;
}

function ValidareCifraDeControl(cnp) {
    var cifraControl = "";
    cifraControl = cnp[12];
    //console.log(cifraControl);
    if (cifraControl == "0") {
        console.log('cifra de control nu este buna');
        return false;
    }
    //console.log('cifra de control este buna');
    return true;
}