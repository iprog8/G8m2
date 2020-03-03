function AmFostClickuit() {
    var date = new Date();
    var secunde = date.getSeconds()
    if (secunde % 2 == 0) {

        alert(secunde + ' este numar par');

    }
    else {

        alert(secunde + ' este numar impar');

    }
    alert('Cineva a dat click pe mine.');
}

function Repeta() {

    for (let i = 1; i <= 5; i++) {

        alert('Suntem la runda ' + i);

    }

}