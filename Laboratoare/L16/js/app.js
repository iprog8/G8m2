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
    var numePersoana = persoana.nume;
    var numeComplet = persoana.NumeComplet();
    var div = document.getElementById("asdf");
    alert(prenumePersoana);
    alert(numePersoana);
    alert(numeComplet);
}