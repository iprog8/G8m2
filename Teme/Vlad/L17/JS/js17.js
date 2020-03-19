function validateCNP(source, event) {
    codNumericPersonal = document.getElementById("cnp")
    elementRezultat = document.getElementById("rezultatValidare")
    codNumericPersonalElement = codNumericPersonal.value
    console.log(typeof(codNumericPersonalElement))
    console.log(codNumericPersonalElement[0])
    if ((isNaN(codNumericPersonalElement)) || (codNumericPersonalElement.length != 13) || (codNumericPersonalElement.indexOf(' ') >= 0) ) {
        elementRezultat.innerText = "CNP Invalid";
        return false;
    }

    cifraSexului = codNumericPersonalElement[0]
    cifreleAnului = codNumericPersonalElement.slice(1,3)
    cifreleLunii = codNumericPersonalElement.slice(3,5)
    cifreleZilei = codNumericPersonalElement.slice(5,7)
    cifreleJudetului = codNumericPersonalElement.slice(7,9)
    cifreleNrOrdine = codNumericPersonalElement.slice(9,12)
    cifraControl = codNumericPersonalElement[12]
    console.log(cifreleAnului)
    if (valideazaSex(cifraSexului)) {   

        if (valideazaLuna(cifreleLunii)) {

            if (valideazaZiua(cifreleZilei)) {

                if (valideazaJudetul(cifreleJudetului)) {
                    
                    if (valideazaNrOrdine(cifreleNrOrdine)) {

                        if (valideazaCifraControl(cifraControl)) {
                            elementRezultat.innerText = "CNP valid";
                        } else {
                            elementRezultat.innerText = "Cifra Control invalida";
                        }
                    }   else {
                        elementRezultat.innerText = "Cifrele Nr Ordine invalide";
                    }
                }   else {
                    elementRezultat.innerText = "Cifrele Judetului invalide";
                }
            } else {
                elementRezultat.innerText = "Cifrele Zilei invalide";
            }
        } else {
            elementRezultat.innerText = "Cifrele Lunii invalide";
        }
    }   else {
        elementRezultat.innerText = "Cifra Sexului invalida";
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
    if((cifreleLunii < '01') || (cifreleLunii > '12')) {
        return false;
    } return true;
}
function valideazaZiua(cifreleZilei,cifreleLunii,cifreleAnului) { 
    if((cifreleZilei < '01') || (cifreleZilei > '31')) {
        return false;
    }
    else if(parseInt(cifreleLunii) == 02 && (parseInt(cifreleAnului) % 4 != 0)) {
        if(parseInt(cifreleZilei >28)) {
            return false;
        }
    } else if (parseInt(cifreleLunii) == 02 && (parseInt(cifreleAnului) % 4 == 0)) {
        if (parseInt(cifreleZilei) > 29) {
            return false;
        }
    } return true;
}

function valideazaJudetul(cifreleJudetului) { 
    if((cifreleJudetului < '01') || (cifreleZilei == '47') || (cifreleZilei == '48') || (cifreleZilei == '49') || (cifreleZilei == '50') || (cifreleZilei > '52') ) {
        return false;
    } return true;
}

function valideazaNrOrdine(cifreleNrOrdine) {
    if(cifreleZilei < '001') {
        return false;
    } return true;
}

function valideazaCifraControl(cifraControl) {
    nrDeControl = '279146358279'
    CNPFaraCifraControl = codNumericPersonalElement.slice(0,13)
    i =0
    SumaprodusCifre = 0
    for (i in nrDeControl) {
       SumaprodusCifre +=   parseInt(nrDeControl[i])*parseInt(CNPFaraCifraControl[i])
    } restul = SumaprodusCifre % 11
    if (restul == 10) {
        restul = 1;
    }
    if (restul != cifraControl) {
        return false;
    } return true;
}