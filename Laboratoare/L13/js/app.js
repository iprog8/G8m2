// comentariu pe o linie
/* Comentariu 
multiline */
/*
    1. Evenimente
    2. Structuri decizionale
    3. Structuri repetitive
    4. Functii
    5. Variabile
    6. Variabile de tip lista
    7. Functii cu parametri
    8. Operatorii: numere, string-uri, booleani
    9. Algoritmii
*/

//2. functie
function FunctieDeStartPentruEventulOnClick() {
  alert(" Eu sunt apelat cand se da click pe buton");
}

function SuntApelataCandSeIncarcaSiteul() {
  alert("Site-ul s-a incarcat!");
}

function OStructuraDecizionala() {
  var date = new Date();
  var seconds = date.getSeconds();

  if (seconds % 2 == 0) {
    alert("numarul " + seconds + " este par");
  } else {
    alert("numarul " + seconds + " este impar");
  }
}

function OStructuraRepetitiva() {
  let numarDeRepetari = 5;
  for (let index = 1; index <= numarDeRepetari; index++) {
    alert("Iteratia curenta este " + index);
  }
}

function OLista() {
  var listaCumparaturi = []; //lista goala
  var listaCumparaturi2 = ["mere", "pere", "prune"]; // lista cu 3 elemente
  listaCumparaturi.push("mere"); //0
  listaCumparaturi.push("pere"); //1
  listaCumparaturi.push("prune"); //2

  ///listaCumparaturi.splice(1, 1);

  for (var index in listaCumparaturi) {
    var fruct = listaCumparaturi[index];
    alert("la pozitia " + index + " se afla fructul: " + fruct);
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

function OperatoriNumere() {
  debugger;
  var suma = 3 + 6;
  var scadere = 3 - 6;
  var inmultire = 3 * 6;
  var impartire = 3 / 6;
  var rest = 3 % 6;
  var result = suma > scadere; // mai mare
  result = suma >= scadere; // mai mare sau egal
  result = suma < scadere; // mai mic
  result = suma <= scadere; // mai mic sau egal
  result = suma == scadere; // egal
  result = suma != scadere; // diferit
}

function OperatoriiBooleni() {
  debugger;
  var adevarat = true;
  var fals = false;
  var rezultat = adevarat || fals; //sau/or
  rezultat = adevarat && fals; //si/and
  rezultat = !adevarat; //negatia/not
  rezultat = adevarat || !fals;
}

function OperatoriiString() {
  debugger;
  var text = "Mama are mere";
  text = text + " multe"; // concatenare
  var rezultat = text.includes("mere");
  rezultat = text.match("mere");
  rezultat = text.indexOf("mere");
}

OperatoriNumere();
OperatoriiBooleni();
OperatoriiString();
SuntApelataCandSeIncarcaSiteul();
