function ValideazaTelefon() {
    var telefonElement = document.getElementById("telefon");
    var telefon = CuratareNumarTelefon(telefonElement.value);
    console.log("numarul validat este " +telefon);
    NumarValid(telefon);
}

function CuratareNumarTelefon(telefon) {
    var telefonCuratat = '';
    if (telefon.startsWith("004")) {
        telefonCuratat = telefon.substr(3, telefon.length)
    } else if (telefon.startsWith("+4")) {
        telefonCuratat = telefon.substr(2, telefon.length);
    } else {
        telefonCuratat = telefon;
    }
    console.log(telefonCuratat);
    if (telefonCuratat.includes(" ")) {
        telefonCuratat = telefonCuratat.split(' ').join('');
    }
    if (telefonCuratat.includes("/")) {
        telefonCuratat= telefonCuratat.split('/').join('')
    }
    if (telefonCuratat.includes(".")) {
        telefonCuratat = telefonCuratat.split('.').join('')
    }
    if (telefonCuratat.includes("-")) {
        telefonCuratat = telefonCuratat.split('-').join('')
    }
    console.log(telefonCuratat)
    return telefonCuratat;
}

function NumarValid(telefon) {
    if (telefon.length != 10) {
        console.log("telefonul nu are 10 cifre");
        return false;
    }
    if (telefon[0] != 0) {
        console.log("telefonul nu incepe cu0")
        return false;
    }
    if (telefon[1] != 2 && telefon[1] !=3 && telefon[1] !=7 ) {
        console.log("telefonul nu are 2, 3 sau 7 pe a doua pozitie");
        return false;
    }
    if (telefon[1] ==2 || telefon[1] ==3 ){

    }
    return true;
}

