
function validateCNP(source, event) {
    var cnp = document.getElementById("cnp")
    elementRezultat = document.getElementById("rezultatValidare")

    cnpElement = cnp.value
    console.log(typeof (cnpElement))
    console.log(cnpElement[0])
    if ((isNaN(cnpElement)) || (cnpElement.length != 13) || (cnpElement.indexOf(' ') >= 0)) {
        elementRezultat.innerText = "CNP Invalid";
        return false;
    }

    cifraSexului = cnpElement[0]
    cifreleAnului = cnpElement.slice(1, 3)
    cifreleLunii = cnpElement.slice(3, 5)
    cifreleZilei = cnpElement.slice(5, 7)
    cifreleJudetului = cnpElement.slice(7, 9)
    cifreleNrOrdine = cnpElement.slice(9, 12)
    cifraControl = cnpElement[12]
    console.log(cifreleAnului)
    if (!valideazaSex(cifraSexului)) {
        elementRezultat.innerText = "Cifra Sexului invalida";
        return;
    }

    if (!valideazaLuna(cifreleLunii)) {
        elementRezultat.innerText = "Cifrele Lunii invalide";
        return;
    }

    if (!valideazaZiua(cifreleZilei)) {
        elementRezultat.innerText = "Cifrele Zilei invalide";
        return;
    }

    if (!valideazaJudetul(cifreleJudetului)) {
        elementRezultat.innerText = "Cifrele Judetului invalide";
        return;
    }

    if (!valideazaNrOrdine(cifreleNrOrdine)) {
        elementRezultat.innerText = "Cifrele Nr Ordine invalide";
        return;
    }

    if (valideazaCifraControl(cifraControl)) {
        elementRezultat.innerText = "CNP valid";
    } else {
        elementRezultat.innerText = "Cifra Control invalida";
    }
}

function valideazaSex(cifraSexului) {
    //debugger;
    if ((cifraSexului == 3) || (cifraSexului == 4) || (cifraSexului == 9)) {
        return false;
    } return true;
}

/*function valideazaAnul(cifreleAnului) {
    if (cifraSexului)
}*/

function valideazaLuna(cifreleLunii) {
    // luna : 01,02,03,04,05,06..12)
    if ((cifreleLunii < '01') || (cifreleLunii > '12')) {
        return false;
    } return true;
}
function valideazaZiua(cifreleZilei, cifreleLunii, cifreleAnului) {
    if ((cifreleZilei < '01') || (cifreleZilei > '31')) {
        return false;
    }
    else if (parseInt(cifreleLunii) == 02 && (parseInt(cifreleAnului) % 4 != 0)) {
        if (parseInt(cifreleZilei > 28)) {
            return false;
        }
    } else if (parseInt(cifreleLunii) == 02 && (parseInt(cifreleAnului) % 4 == 0)) {
        if (parseInt(cifreleZilei) > 29) {
            return false;
        }
    } return true;
}

function valideazaJudetul(cifreleJudetului) {
    if ((cifreleJudetului < '01') || (cifreleZilei == '47') || (cifreleZilei == '48') || (cifreleZilei == '49') || (cifreleZilei == '50') || (cifreleZilei > '52')) {
        return false;
    } return true;
}

function valideazaNrOrdine(cifreleNrOrdine) {
    if (cifreleZilei < '001') {
        return false;
    } return true;
}

function valideazaCifraControl(cifraControl) {
    nrDeControl = '279146358279'
    CNPFaraCifraControl = cnpElement.slice(0, 13)
    i = 0
    SumaprodusCifre = 0
    for (i in nrDeControl) {
        SumaprodusCifre += parseInt(nrDeControl[i]) * parseInt(CNPFaraCifraControl[i])
    } restul = SumaprodusCifre % 11
    if (restul == 10) {
        restul = 1;
    }
    if (restul != cifraControl) {
        return false;
    } return true;
}