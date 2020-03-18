function ValideazaEmail() {
    var emailInitial = document.getElementById('email');
    if (validareEmail(emailInitial.value)) {
        var impartireaEmailului = impartire(emailInitial.value);
    }
    else {
        console.log('nu e bun ')
    }
}
function validareEmail(emailInitial) {
    if (!(emailInitial.includes("@")) || (emailInitial.includes(" "))) {
        console.log("nu are @ sau are spatii");
        return false;
    }
    else {
        console.log(emailInitial);
        return true;
    }
}
function myFunction() {
    var str = "0";                                                              //ASCII CODE :
    var n = str.charCodeAt(0);                                                  // NUMERE : 0-9 = [48-57]
    alert(n);                                                                   // CIFRE : A-Z [65-90]
}                                                                               // CIFRE MICI : a-z [97-122]                                                            
function impartire(emailInitial) {
    var split = emailInitial.split('@');
    //console.log('am impartit');
    var username = split[0];
    //console.log("username ul tau este " + username);
    var domain = split[1];
    var split2 = domain.split('.');
    //console.log("am mai impartit odata");                                   //var domain = split[1];
    var domain2 = split2[0];
    //console.log('domain ul tau este ' + domain2);                            //console.log(domain); 45 46 95
    var dns = split2[1];
    //console.log("dns ul tau este " + dns);
    verificare(username, domain2, dns);
}
function verificare(username, domain, dns) {
    var usernameLowerCase = username.toLowerCase();
    for (let i = 0; i < username.length; i++) {
        var uChar = usernameLowerCase.charCodeAt(i);
        if (!((97 <= uChar && uChar <= 122) || (48 <= uChar && uChar <= 57))) {
            if (uChar == 45 || uChar == 46 || uChar == 95) {
                continue;
            }
            console.log('am returnat false');
            return false;
        }
    }
    if (!UsernameLitera(username[0])) {
        console.log('primu caracter nu e litera');
        return false;
    }
}
function UsernameLitera(username) {
    var usernameCod = usernameCod.charCodeAt(0);
    if (usernameCod >= 97 && usernameCod <= 122) {
        return true;
    }
    else {
        return false;
    }
}