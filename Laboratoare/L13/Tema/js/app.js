var aparitiiDark = 0;
var aparitiiLight = 0;
var aparitiiColorful = 0;

function ShowSeconds() {
    aparitiiDark = 0;
    aparitiiLight = 0;
    aparitiiColorful = 0;
    for (let index = 0; index < 10; index++) {
        setTimeout(ChangeColor, index * 1000);
    }
}

function ChangeColor() {
    date = new Date()
    var seconds = date.getSeconds();
    var body = document.getElementById("background");
    if (body != null) {
        if (seconds % 3 == 0) {
            body.classList.remove("dark");
            body.classList.remove("colorful");
            body.classList.add("light");
            aparitiiLight++;
        }
        else if (seconds % 3 == 1) {
            body.classList.remove("dark");
            body.classList.remove("light");
            body.classList.add("colorful");
            aparitiiColorful++;
        }
        else {
            body.classList.remove("colorful");
            body.classList.remove("light");
            body.classList.add("dark");
            aparitiiDark++;
        }
        document.getElementById("seconds").innerHTML = seconds;
        document.getElementById("aparitiiLight").innerHTML = aparitiiLight;
        document.getElementById("aparitiiColorful").innerHTML = aparitiiColorful;
        document.getElementById("aparitiiDark").innerHTML = aparitiiDark;
        document.getElementById("totalAparitii").innerHTML = aparitiiLight + aparitiiDark + aparitiiColorful;
        //alert(seconds);
    }
}

function zzzFunction() {
    console.log('Aici trebuie scris codul de afisare pop up');
}

setTimeout(zzzFunction, 60 * 1000);
