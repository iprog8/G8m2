function ValideazaTelefon() {
    var telefonElement = document.getElementById("telefon");
    var telefon = CuratareNumarTelefon(telefonElement.value);
    console.log("Numarul de validat este " + telefon);
    if (NumarValid(telefon)) {
        //cod pentru numar valid
        var resultElement = document.getElementById("rezultatValidare");
        resultElement.innerHTML = '<span class="alert alert-success">Telefon Valid</span>';
    }
    else {
        //cod pentru numar invalid
        var resultElement = document.getElementById("rezultatValidare");
        resultElement.innerHTML = '<span class="alert alert-danger">Telefon Invalid</span>';
    }
}

function CuratareNumarTelefon(telefon) {
    var telefonCuratat = '';
    //curatare de cod tara
    if (telefon.startsWith("004")) {
        telefonCuratat = telefon.substr(3, telefon.length);
    } else if (telefon.startsWith("+4")) {
        telefonCuratat = telefon.substr(2, telefon.length);
    } else {
        telefonCuratat = telefon;
    }
    console.log(telefonCuratat);
    //curatare de " ", /, ., -
    if (telefonCuratat.includes(" ")) {
        telefonCuratat = telefonCuratat.split(' ').join('');
    }
    if (telefonCuratat.includes("/")) {
        telefonCuratat = telefonCuratat.split('/').join('');
    }
    if (telefonCuratat.includes(".")) {
        telefonCuratat = telefonCuratat.split('.').join('');
    }
    if (telefonCuratat.includes("-")) {
        telefonCuratat = telefonCuratat.split('-').join('');
    }
    console.log(telefonCuratat);
    return telefonCuratat;
}

function NumarValid(telefon) {
    if (isNaN(telefon)) {
        console.log('Telefonul nu contine doar cifre')
        return false;
    }
    if (telefon.length != 10) {
        console.log("Telefonul nu are 10 caractere");
        return false;
    }
    if (telefon[0] != 0) {
        console.log("Telefonul nu incepe cu 0");
        return false;
    }
    if (telefon[1] != 2 && telefon[1] != 3 && telefon[1] != 7) {
        console.log("Telefonul nu are 2, 3 sau 7 pe a doua pozitie.");
        return false;
    }
    //ramura telefon fix
    if (telefon[1] == 2 || telefon[1] == 3) {
        var codJudetString = telefon.substr(2, 2);
        var codJudetInt = parseInt(codJudetString);
        if (!(telefon[2] == 1 || (codJudetInt >= 30 && codJudetInt <= 69))) {
            console.log("Telefonul fix nu este de bucuresti sau alt judet");
            return false;
        }
    }
    //ramura telefon mobil
    else if (telefon[1] == 7) {
        var codMobil = parseInt(telefon[2]);
        if (codMobil == 0) { //if (codMobil < 1 || codMobil > 9) {
            console.log("Telefonul mobil nu este valid.");
            return false;
        }
    }
    return true;
}



//explicatii suplimentare

//string:  0723123456
//pozitie: 0123456789

//explicatii operatori booleeni
function iff() {
    var telefon = '023';
    //telefon[1] != 2 && telefon[1] != 3 && telefon[1] != 7
    if (telefon[1] == 2 || telefon[1] == 3 || telefon[1] == 7) {
        //nr corect
    }
    else {
        //nr incorect
    }

    //023..
    if (telefon[1] != 2 && telefon[1] != 3) {
        //nr incorect
    }
    // A || B negat este echivalenta cu !A && !B
    // A && B negat este echivalenta cu !A || !B
}