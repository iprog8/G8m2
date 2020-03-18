var lista = [1, 2, 4, 5, 6, 8, 9, 10, 13, 15, 16];
function CalculeazaSumaNumerePare() {
    var listaNumerePare = ExtrageNumerePare();
    var suma = 0;
    for (let i = 0; i < listaNumerePare.length; i++) {
        var numar = listaNumerePare[i];
        suma += numar;
    }

    var divSuma = document.getElementById("sumaNumerePare");
    if (divSuma == null) return;
    divSuma.innerText = "Suma numerelor pare este " + suma;
}

function ExtrageNumerePare() {
    var listaNumerePare = [];
    for (let i = 0; i < lista.length; i++) {
        var numar = lista[i];
        if (numar % 2 == 0) {
            listaNumerePare.push(numar);
        }
    }
    return listaNumerePare;
}


//tipuri de variabile
var varsta = 19; //numeric (int, integer) -2mild +2mild
var greutate = 79.6; // numeric (float) -+
var nume = "Gheorghe"; // string (text)
var clasa = ["ana", "dan", "nicu", "maria"]; // lista (contine stringuri)
var numere = [2, 4, 6, 8, 10, 12]; // lista (contine numere)
var doarme = false; // bool / boolean (true/false)
//true = 1 (int)
//false = orice altceva

var persoana = {
    prenume: "Ana",
    nume: "Popescu",
    doarme: false,
    greutate: 55,
    NumeComplet: function () {
        return this.nume + " " + this.prenume;
    }
}; //variabile de tip obiect

persoana.inaltime = 177;


var persoana2; // undefined
var persoana3 = null; // null
var result = 3 == "3"; // este adevarat pentru ca compara doar valorile
result = typeof 3 == typeof "3"; // este fals pentru ca compara doar tipurile number vs string

result = 3 === "3"; // este fals pentru ca compara si valorile SI tipurile 
result = 3 == "3" && typeof 3 == typeof "3"; // este echivalent cu linia de mai sus


function TestObject() {
    var prenumePersoana = persoana.prenume;
    prenumePersoana = persoana["prenume"]; // este identica cu linia de cod de mai sus
    var numePersoana = persoana.nume;
    var numeComplet = persoana.NumeComplet();
    var div = document.getElementById("asdf");
    window.console.log("");
    console.log(""); //este identica cu linia de sus pentru ca toate functiille pe care le utilizam fara obiect in fata
    // sunt in window
    //window.TestObject(); //functiile noastre sunt atasate automat obiectului window
    alert(prenumePersoana);
    alert(numePersoana);
    alert(numeComplet);
}

function Asignari() {
    let x = 10; // am asignat/atribuit lui x valoarea 10
    let y = 2;
    let z = x + y; //intai fac adunarea si apoi atribuirea
    x += 5; // x = x + 5;
    x -= 3; // x = x - 3;
    x *= 2; // x = x * 2;
    x %= 4; // x = x % 4; -- 0, 1, 2, 3 -- restul impartirii
    console.log(x);
}

function OperatorulTernar() {

    let text = persoana.greutate > 80 ? "Te-ai cam ingrasat" : "Esti bine";

    if (persoana.greutate > 80) {
        //aici pot sa pun cate linii vreau...
        text = "Te-ai cam ingrasat";
    }
    else {
        //si aici pot sa pun cate linii vreau...
        text = "Esti bine";
    }


    if (persoana.greutate > 80) {
        alert("te-ai ingrasat");
    }
    else {
        alert("Esti bine");
    }

    persoana.greutate > 80 ? alert("te-ai ingrasat") : alert("esti bine");
}

function TipulString() {
    let text = "Avion cu motor";
    text = text + " si cu elice!"; //concatenare
    let lungimeText = text.length; //lungimea txtului in caractere
    var primaLitera = text[0]; //citeste prima pozitie din text
    var ultimaLitera = text[text.length - 1];
    var pozitieInText = text.indexOf("cu");
    var ultimaPozitieInText = text.lastIndexOf("cu");
    //
    let textTaiat = text.slice(6);
    let textTaiat2 = text.slice(6, 18);
    let subText = text.substr(6);
    let subText2 = text.substr(6, 10);
    subText = text.substring(6);
    subText2 = text.substring(6, 10);
    let textInlocuit = text.replace("elice", "reactie");
    let textLitereMici = text.toLowerCase();
    let textLitereMari = text.toUpperCase();
    let textConcatenat = text.concat(" Neata!");
    let textSpart = text.split(" ");
    let textSpart2 = text.split("cu");

    let salut = 'Sal\'bro';
    salut = "Sal\"bro";
    salut = "Neata\ bro";
    salut = "Neata\nLume!";
    salut = "Neata \tLume";

    console.log("");
}

function TipulNumber() {
    let numar = 128;
    let numarText = numar.toString();
    let numarHexa = numar.toString(16);
    let numarBinar = numar.toString(2);
    let bere = 100 / "bere"; //NaN (Not a Number)
    numar = 9.5678;
    var rotunjire = numar.toFixed(2); //rutunjire cu 2 zecimale
    rotunjire = numar.toFixed(); //rotunjire la nr intreg (e text)
    let precizia = numar.toPrecision(2);
    precizia = numar.toPrecision(6);
    let numarInt = parseInt("10"); // 10
    numarInt = parseInt("10.33"); // 10
    numarInt = parseInt("10z20 30"); //10
    numarInt = parseInt("10 years"); //10
    numarInt = parseInt("anul 10"); //NaN
    let random = Math.random(); //0..1
    let random10 = (10 * Math.random()).toFixed();
    let min = Math.min(0, 150, 55, -30, 77);
    let max = Math.max(0, 150, 55, -30, 77);
    rotunjire = Math.round(4.7);
    rotunjire = Math.round(4.4);
    rotunjire = Math.ceil(4.4);
    rotunjire = Math.floor(4.7);


    console.log("");
}