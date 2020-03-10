function TextVerde() {
    var element = document.getElementById("cos-cumparaturi");
    if (element == null) {
        return;
    }
    element.classList.add("green-text");
    element.classList.remove("red-text");
    element.classList.remove("sum");
}

function TextRosu() {
    var element = document.getElementById("cos-cumparaturi");
    if (element == null) {
        return;
    }
    element.classList.add("red-text");
    element.classList.remove("green-text");
    element.classList.remove("sum");
}

function Sum() {
    a= 41+35;
    alert (a)
    var element = document.getElementById("cos-cumparaturi");
    if (element == null) {
        return;
    }
    element.classList.add("sum");
    element.classList.remove("red-text");
    delement.classList.remove("green-text");
}

function Lemonbkgd() {
    var element = document.getElementById("cos-cumparaturi");
    if (element == null) {
        return;
    }
    element.classList.add("lemon-bkgd");
    element.classList.remove("lime-bkgd");
    element.classList.remove("grey-bkgd");

}

function Limebkgd() {
    var element = document.getElementById("cos-cumparaturi");
    if (element == null) {
        return;
    }
    element.classList.add("lime-bkgd");
    element.classList.remove("lemon-bkgd");
    element.classList.remove("grey-bkgd");
}

function Greybkgd() {
    var element = document.getElementById("cos-cumparaturi");
    if (element == null) {
        return;
    }
    element.classList.add("grey-bkgd");
    element.classList.remove("lemon-bkgd");
    element.classList.remove("lime-bkgd");
}

function AfiseazaData() {
    var backgroundcolor = document.getElementById("cos-cumparaturi");
    var lemon=0;
    var lime=0;
    var grey=0;
    for (let index = 1; index <= 10; index++) {
        var date = new Date();
        var day = ("0" + date.getDate()).slice(-2);
        var month = ("0" + (date.getMonth() + 1)).slice(-2);
        var year = date.getFullYear();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        if (backgroundcolor != null) {
            if (seconds % 3 == 0) {
                backgroundcolor.classList.add("lemon-bkgd");
                backgroundcolor.classList.remove("grey-bkgd");
                backgroundcolor.classList.remove("lime-bkgd");
                lemon++;
            }
            else if (seconds % 3 == 1) {
                backgroundcolor.classList.add("lime-bkgd");
                backgroundcolor.classList.remove("grey-bkgd");
                backgroundcolor.classList.remove("lemon-bkgd");
                lime++;
            }
            else {
                backgroundcolor.classList.add("grey-bkgd");
                backgroundcolor.classList.remove("lime-bkgd");
                backgroundcolor.classList.remove("lemon-bkgd");
                grey++;
            }
        } 
        alert( index + "." + "Data curenta este:" + day + "." + month + "." + year + "   " + "Ora :" + hours + ":" + minutes +"'" + seconds);
    }
    alert("Culoarea background-ului s-a schimbat in felul urmator:\n" + "Lemon-" + lemon + "\n" + "Lime-" + lime + "\n" + "Grey-" + grey);
}
  