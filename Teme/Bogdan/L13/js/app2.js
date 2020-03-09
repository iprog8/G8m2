function TextVerde() {
    document.getElementById("cos-cumparaturi").classList.add("green-text");
    document.getElementById("cos-cumparaturi").classList.remove("red-text");
    document.getElementById("cos-cumparaturi").classList.remove("sum");
}

function TextRosu() {
    document.getElementById("cos-cumparaturi").classList.add("red-text");
    document.getElementById("cos-cumparaturi").classList.remove("green-text");
    document.getElementById("cos-cumparaturi").classList.remove("sum");
}

function Sum() {
    a= 41+35;
    alert (a)
    document.getElementById("cos-cumparaturi").classList.add("sum");
    document.getElementById("cos-cumparaturi").classList.remove("red-text");
    document.getElementById("cos-cumparaturi").classList.remove("green-text");
}

function Lemonbkgd() {
    document.getElementById("cos-cumparaturi").classList.add("lemon-bkgd");
    document.getElementById("cos-cumparaturi").classList.remove("lime-bkgd");
    document.getElementById("cos-cumparaturi").classList.remove("grey-bkgd");

}

function Limebkgd() {
    document.getElementById("cos-cumparaturi").classList.add("lime-bkgd");
    document.getElementById("cos-cumparaturi").classList.remove("lemon-bkgd");
    document.getElementById("cos-cumparaturi").classList.remove("grey-bkgd");
}

function Greybkgd() {
    document.getElementById("cos-cumparaturi").classList.add("grey-bkgd");
    document.getElementById("cos-cumparaturi").classList.remove("lemon-bkgd");
    document.getElementById("cos-cumparaturi").classList.remove("lime-bkgd");
}