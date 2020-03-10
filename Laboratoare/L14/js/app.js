

function SaSchimbatTextul(s, e) {
    console.log(s);
    console.log(e);

    document.getElementById('data').classList.add('default-class');

    var element = document.getElementById('data');
    var listClass = element.classList;
    listClass.add('default-class');

    ionel.aduApa('fantana').beaApa('Gigiel').mergeLaMoara();

    var galeataApa = ionel.aduApa('fantana');
    var gigel = galeataApa.beaApa('Gigel');
    gigel.mergeLaMoara();
}

var asD123_;
var asd123_ = 2;
var _as$d = 3;

//number n1 = 4;
//string s = "aaa";
//boolean x = false;
var n1 = 4;
var pi = 3.141592653;
var s = "aaa";
var x = false;
s = 'Mama are mere';
var listaNume = ['ana', 'maria', 'vlad'];
//TODO: zzz

function FunctieCuVariabile() {

    alert(n1);
    alert(s);
}

function ChangeBackgroudCss(cssClass, idElement) {
    var element = document.getElementById(idElement);
    if (element == null) {
        console.warn('Nu am gasit elementul cu ID-ul bdy');
        return false;
    }
    else {
        element.classList.remove('light', 'dark');
        element.classList.add(cssClass);
        return true;
    }
}

function Aduna(termen1, termen2) {
    var suma = 0;
    suma = termen1 + termen2;
    return suma;
}

function LaPatrat(termen) {
    var patrat = 0;
    patrat = termen * termen;
    return patrat;
}

function LaCub(termen) {
    var cub = 0;
    cub = termen * termen * termen;
    return cub;
}

function AfiseazaSuma() {
    var rezultatSuma = Aduna(234, 5432);
    var divElement = document.getElementById('data');
    if (divElement == null) {
        return;
    }
    divElement.innerText = rezultatSuma;
}

function SwitchCaseSample(text) {
    switch (text) {
        case "Pisica":
            console.log('Miau! Miau! Miau! ');
            // alte linii de cod
            break;
        // si mai multe linii de cod
        case "Caine":
            console.log('Ham! Ham! Ham! ');
            // alte linii de cod
            break;
        case "Gaina":
            console.log('Cot co dac! Cot co dac! Cot co dac! ');
            // alte linii de cod
            break;
        default:
            console.warn('Nu stiu cum face ' + text);
            //TODO: sa ma mai gandesc si la alte animale
            break;
    }
    //comanda break ma scoate aici ( adica inafara switch-ului)
}


function TesteazaAnimale() {
    debugger;
    SwitchCaseSample('Pisica');
    SwitchCaseSample('Caine');
    SwitchCaseSample('Gaina');
    SwitchCaseSample('Soarece');
    SwitchCaseSample('Melc');
}