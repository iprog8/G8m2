//comentariu pe o linie
/* Comentariu
 multilines*/

/* 1. Evenimente - click, double click
   2. Structure decizionale
   3. Structuri repetitive
   4. Functii
   5. Variabile
   6. Variabile de tip lista
   7. Functii cu parametri
   8. Operatori: numere, string-uri, booleani
   9. Algoritmi

*/

// 2. functie
function FunctieDeStartPentruEventulOnClick() {
    alert("Eu sunt apelat cand seda click pe buton");

}

function SuntApelataCandSeIncarcaSiteul() {
    alert("Site-ul s-a incarcat!");
}

function OStructuraDecizionala() {
    var date = new Date();
    var seconds = date.getSeconds();
    if (seconds % 2 == 0) {
        alert("numarul" + seconds + "este par");
    } else
        alert("numarul" + seconds + "este impar");
}

function OStructuraRepetitiva() {
    var numarDeRepetari = 5;
    for (let index = 1; index <= numarDeRepetari;)
        alert("Iteratia curenta este" + index);
}

function OLista() {
    var listaCumparaturi = []; //lista goala//
    listaCumparaturi.push("mere");
    listaCumparaturi.push("pere");
    listaCumparaturi.push("prune");
    listaCumparaturi.pop("pere"); // a scoate din lista //
    listaCumparaturi.splice(1);
    debugger;

    for (var index in listaCumparaturi) {
        if (listaCumparaturi.hasOwnProperty(index)) {
            var fruct = listaCumparaturi[index];
            alert("la pozitia" + index + "se afla fructul:" + fruct);
        }
    }
}

function Aduna(termen1, termen2) {
    var suma = termen1 + termen2;
    return suma;
}

function Adunari() {
    var primaSuma = Aduna(23, 54);
    var aDouaSuma = Aduna(76, 46);
    Aduna(56, 42);
    alert(primaSuma);
    alert(aDouaSuma);
}

//Operatori//

function OperatoriNumere() {
    var suma = 3 + 6;
    var scadere = 3 - 6;
    var inmultire = 3 * 6;
    var impartire = 3 / 6;
    var rest = 3 % 6;
    var result = suma > scadere; //mai mare
    result = suma >= scadere;//mai mare sau egal
    result = suma < scadere; //mai mic
    result = suma <= scadere; // mai mic sau egal
    result = suma == scadere; // egal
    result = suma != scadere; //diferit
}

function OperatoriiBooleni() {
    debugger;
    var adevarat = true;
    var fals = false;
    rezultat = adevarat || fals; //sau/ or
    rezultat = adevarat && fals; //si/and
    rezultat = !adevarat; //negatia/ not
    rezultat = adevarat || fals; //sau
}

function OperatoriiString() {
    debugger;
    var text = "Mama are mere";
    text = text + "multe";//concatenare
    var rezultat = text.includes("mere");
    rezultat = text.match("mere");
    rezultat = text.indexOf("mere");
}

OperatoriNumere();
OperatoriiBooleni();
OperatoriiString();
SuntApelataCandSeIncarcaSiteul();


