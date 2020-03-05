//Laborator 13 punctul 1//

// punctul 1 // 

function SchimbaRosu() {
    document.getElementById('cos-cumparaturi').classList.add('red-text');
    document.getElementById('cos-cumparaturi').classList.remove('green-text');
}

function SchimbaVerde() {
    document.getElementById('cos-cumparaturi').classList.add('green-text');
    document.getElementById('cos-cumparaturi').classList.remove('red-text');
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

// Laborator 13 punctul 2//

function SchimbaBackground1() {
    var element = document.getElementById('schimbaBackground');
    if (element == null) {
        return;
    }
    element.classList.add('background1');
    element.classList.remove('background2');
    element.classList.remove('background3');
}

function SchimbaBackground2() {
    var element = document.getElementById('schimbaBackground');
    if (element == null) {
        return;
    }
    element.classList.add('background2');
    element.classList.remove('background1');
    element.classList.remove('background3');
}

function SchimbaBackground3() {
    document.getElementById('schimbaBackground').classList.add('background3');
    document.getElementById('schimbaBackground').classList.remove('background1');
    document.getElementById('schimbaBackground').classList.remove('background2');
}

//Laborator 13 punctul 3 a//

function CitesteDataCurenta() {
    var date = new Date();
    var seconds = date.getSeconds();
    var index1 = 0; // numar de repetari background1
    var index2 = 0; // numar de repetari background2

    if (seconds % 2 == 0) {
        alert("Data este: " + date);
        document.getElementById('schimbaBackground').classList.add('background1');
        document.getElementById('schimbaBackground').classList.remove('background2');
        document.getElementById('schimbaBackground').classList.remove('background3');
        index1++;
    } else {
        alert("Data este: " + date);
        document.getElementById('schimbaBackground').classList.add('background2');
        document.getElementById('schimbaBackground').classList.remove('background1');
        document.getElementById('schimbaBackground').classList.remove('background3');
        index2++;
    }

    if (index1 < index2) {
        alert("Clasa 'background2' are " + index2 + " repetari");
    } else {
        alert("Clasa 'background1' are " + index1 + " repetari");
    }

}
