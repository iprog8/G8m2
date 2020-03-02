// punctul 1 // 

function SchimbaRosu() {
    document.getElementById('cos-cumparaturi').style.color = "red";
}

function SchimbaVerde() {
    document.getElementById('cos-cumparaturi').style.color = "green";
}

// punctul 2//

function Suma(a, b) {
    var sum = a + b;
    document.getElementById('suma').value = sum;
}

function Suma2() {
    var no1 = parseInt(document.getElementById('no1').value);
    var no2 = parseInt(document.getElementById('no2').value);
    var sum = no1 + no2;
    document.getElementById('suma2').value = sum;
}


