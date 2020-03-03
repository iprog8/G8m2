var culoareText;

function Adauga() {
    
    culoareText= document.getElementById("cos-cumparaturi");
    if( culoareText!=null) {
         culoareText.style = "color:blue";
    alert("Ai adaugat un produs in cos!");
}
}

function Elimina() {
    alert("Ai eliminat un produs din cos!");
    culoareText= document.getElementById("cos-cumparaturi");
    if( culoareText!=null) {
        culoareText.style = "color:orange";
}
}
var suma;
function calculeazaSuma(){
    
    suma = 35+41;
    document.getElementById("sum").innerText = suma;


    
}

    
    