
function VerificaDacaEEmail(source, event) {
    console.log("Valideaza email");
    var elementEmail = document.getElementById("email");
    var elementRezultat = document.getElementById("rezultat");
    if (elementEmail == null && elementRezultat == null) {
        return;
    }
    var email = elementEmail.value.toLowerCase();

    var username = email.split("@")[0];
    var domeniu = email.split("@")[1];
    //validare email
    if (ValidariGeneraleEmail(email, username, domeniu)) {
        //validare username
        if (UsernameValid(username)) {
            var host = domeniu.split(".")[0];
            var dns = domeniu.split(".")[1];
            //validare domemiu
            if (DomeniuValid(domeniu, host, dns)) {
                //validare host
                if (HostValid(host)) {
                    //validare dns
                    if (DnsValid(dns)) {
                        elementRezultat.innerText = "Email Valid";
                    }
                    else {
                        elementRezultat.innerText = "Dns Invalid";
                    }
                }
                else {
                    elementRezultat.innerText = "Host Invalid";
                }
            }
            else {
                elementRezultat.innerText = "Domeniu Invalid";
            }
        }
        else {
            elementRezultat.innerText = "Username Invalid";
        }
    }
    else {
        elementRezultat.innerText = "Email Invalid";
    }
}

function ValidariGeneraleEmail(email, username, domeniu) {
    if (!email.includes("@") || !email.includes(".") || email.includes(" ")) {
        console.log("Email-ul nu contine @ sau . sau are spatii.");
        return false;
    }
    if (username == null || username.length == 0 || domeniu == null || domeniu.length <= 4) {
        console.log("Email-ul nu contine username sau domeniu");
        return false;
    }
    // var positionAt = email.indexOf("@");
    // var positionDot = email.lastIndexOf(".");
    // if (positionAt > positionDot) {
    //     console.log("username nu este inainte de @ si domeniul nu este dupa @");
    //     return false;
    // }
    if (!domeniu.includes(".")) {
        console.log("username nu este inainte de @ si domeniul nu este dupa @");
        return false;
    }

    return true;
}

function UsernameValid(username) {
    if (!CaracterulEsteLitera(username[0])) {
        console.log("primul caracter nu e litera");
        return false;
    }
    for (let i = 1; i < username.length; i++) {
        const caracter = username[i];
        var caracterCod = caracter.charCodeAt(0);
        //45 - este -
        //46 - este .
        //95 - este _
        if (!CaracterulEsteLitera(caracter) && isNaN(caracter) && caracterCod != 45 &&
            caracterCod != 95 && caracterCod != 46) {
            console.log("username nu contine doar litere, cifere . - _");
            return false;
        }
    }
    return true;
}

function CaracterulEsteLitera(caracter) {
    var caracterCod = caracter.charCodeAt(0);
    if (caracterCod >= 97 && caracterCod <= 122)
        return true;
    return false;
}

function DomeniuValid(domeniu, host, dns) {
    if (host != null && host.length < 2) {
        console.log("hostul Nu are minim 2 caractere ");
        return false;
    }
    if (dns != null && dns.length < 2) {
        console.log("dns-ul nu are minim 2 caractere ");
        return false;
    }
    return true;
}

function HostValid(host) {
    if (!CaracterulEsteLitera(host[0]) && isNaN(host[0])) {
        console.log("Host nu incepe cu litere sau cifre");
        return false;
    }
    for (let i = 1; i < host.length; i++) {
        const caracter = host[i];
        var caracterCod = caracter.charCodeAt(0);
        //45 - este -
        if (!CaracterulEsteLitera(caracter) && isNaN(caracter) && caracterCod != 45) {
            console.log("host nu contine doar litere, cifere -");
            return false;
        }
    }
    return true;
}

function DnsValid(dns) {
    if (dns.length > 10) {
        console.log("dns nu are max 10 caractere");
        return false;
    }
    for (let i = 1; i < dns.length; i++) {
        const caracter = dns[i];
        if (!CaracterulEsteLitera(caracter)) {
            console.log("dns nu contine doar litere");
            return false;
        }
    }

    return true;
}