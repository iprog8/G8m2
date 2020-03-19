function validateMail() {
    //debugger;
    var mailElement = document.getElementById("mail");
    var mail = mailElement.value; 
    var userName = (mail.split("@"))[0];
    var domainName = (mail.split("@"))[1];
    validateSpCh(mail);
    verification(mail);
    validateUserName(userName);
    validateDomain(domainName);
    result = document.getElementById("rezultatValidare")
    result.innerHTML = "TRUE"
}
function validateSpCh(mail) {
    var specialChars = "*|,\:<>[]{}`\';()&$#%";
    for (i in mail) {
        if(specialChars.indexOf(mail[i]) != -1 ) {
            alert("e-mail contains special caracters")
            return false;
        } 
    }return true
}

function verification(mail) {
    if (mail.indexOf("@") == -1) {
        alert("Adresa nu contine caracterul '@' !")
        return false;
    }
    if (mail.indexOf(' ') >= 0) {
        alert("Adresa de e-mail contine spatii libere!")
        return false;
    } return true;
}

function validateUserName(userName) {
    //debugger;
    if (userName[0].startsWith('.') || userName[0].startsWith('_') || userName[0].startsWith('-') || userName[0].startsWith('-') || (!isNaN(userName[0])) ){
        alert("Adresa de e-mail nu poate incepe cu unul dintre urmatoarele caractere : '.', '_', '-', '0-9'!");
        return false;
    } return true;
}

function validateDomain(domainName) {
    if (domainName.indexOf(".") == -1) {
        alert("Numele de domeniu nu contine caracterul '.' ");
        return false;
    }
    topDomeniu = (domainName.split("."))[1]
    if (topDomeniu.endsWith(".")|| topDomeniu.endsWith("-")||topDomeniu.endsWith("_") ) {
        alert("Numele domeniului nu se poate termina in '.', '-', '_' ! ");
        return false;
    }
    for (i in topDomeniu) {
       if(!isNaN(topDomeniu[i])) {
           alert("Numele domeniului nu poate contine cifre");
           return false;
       } 
    } return true;
}

//function validate()



/* idexOf -The indexOf() method returns the position of the first occurrence of a specified value in a string.

This method returns -1 if the value to search for never occurs.

Note: The indexOf() method is case sensitive.*/