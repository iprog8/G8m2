var lista = [1, 2, 4, 5, 6, 8, 9, 10, 13, 15, 16];

function CalculeazaSumaNumerePare() {
    var listaNumerePare = ExtrageNumerePare();
    var suma = 0;
    for (let i = 0; i < listaNumerePare.length; i++) {
        const numar = listaNumerePare[i];
        suma += numar;
    }
}

function ExtrageNumerePare() {
    var listaNumerePare = [];
    for (let i = 0; i < lista.length; i++) {
        const element = lista[i];
        listaNumerePare.push(element);
    }
    return listaNumerePare;
}

//tipuri de variabile

var varsta = 19;// (int, integer) - 2mld + 2mld
//numeric long 1000*integer
var greutate = 79.6;// numeric (float) + 
var nume = "Gheorghe"; // string (text)
var clasa = ["ana", "dan", "nicu", "maria"]; //lista (contine stringuri)
var numere = [2, 4, 6, 8, 10, 12]; //lista (contine numere)
var doarme = false; //bool / boolean (true/false)
//true = 1 (int)
//false = orice altceva

var persoana = {
    prenume: "Ana",
    nume: "Popescu",
    doarme: false,
    greutate: 55,

    NumeCompletfunction() {
        return this.nume + " " + this.prenume;
    }
};//variabile de tip obiect - se numesc proprietati

var prenumePersoana = persoana.prenume;
var numePersoana = persoana.nume; //obiect.proprietate
//clasa.length;
//document.getElementById("zzz")

var numeComplet = persoana.numeComplet;

function TestObject() {
    var prenumePersoana = persoana.prenume;
    var numePersoana = persoana.nume; //obiect.proprietate 
    var numeComplet = persoane.Nume
    var div = document.getElementById('asdf')
    var numeComplet = persoana.numeComplet();
    alert(prenumePersoana);
    alert(numePersoana);
    alert(numeComplet);

}

//obiectul e o colectie de proprietati si de variabile; functia e o actiune



