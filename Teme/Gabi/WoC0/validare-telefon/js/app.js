function ValideazaTelefon() {
    var telefonElement = document.getElementById('telefon');
    var telefon = CuratareNumarTelefon(telefonElement.value);
    console.log('numarul de validat este ' + telefon);
    if (NumarValid(telefon)) {
        var resultElement = document.getElementById('rezultatvalidare');
        resultElement.innerHTML = '<span class="alert alert-success"> Numar Valid! </span>'
    }
    else {
        var resultElement = document.getElementById('rezultatvalidare');
        resultElement.innerHTML = '<span class="alert alert-warning"> Numar Invalid! </span>'
    }
}
function CuratareNumarTelefon(telefon) {
    var telefonCuratat = '';
    //curatare de cod tara 
    if (telefon.startsWith('004')) {
        telefonCuratat = telefon.substr(3, telefon.length);
    }
    else if (telefon.startsWith('+4')) {
        telefonCuratat = telefon.substr(2, telefon.length);
    }
    else {
        telefonCuratat = telefon;
    }
    // curatare de chestii
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
    return telefonCuratat;
}
function NumarValid(telefon) {
    if (isNaN(telefon)) {
        console.log('telefonul nu contine doar cifre');
        return false;
    }
    if (telefon.length != 10) {
        console.log('telefonul nu are 10 caractere ');
        return false;
    }
    if (telefon[0] != 0) {
        console.log('telefonul nu incepe cu 0');
        return false;
    }
    if (telefon[1] != 2 && telefon[1] != 3 && telefon[1] != 7) {
        console.log('telefonul nu are 2,3 sau 7 pe a doua pozitie. ');
        return false;
    }
    //ramura telefon fix
    if (telefon[1] == 2 || telefon[1] == 3) {
        var codJudetString = telefon.substr(2, 2);
        var codJudetInt = parseInt(codJudetString);
        if (!(telefon[2] == 1 || (codJudetInt >= 30 && codJudetInt <= 69))) {
            console.log('telefonul nu este de bucuresti sau alt judet');
            return false;
        }
    }
    // ramura pentru telefon
    else if (telefon[1] == 7) {
        var codMobil = parseInt(telefon[2]);
        if (codMobil < 1 || codMobil > 9) { // or if (codMobil == 0 ) then ->
            console.log('Telefonul mobil nu este valid ');
            return false;
        }
    }
    return true;
}
