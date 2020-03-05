function ChangeColorToViolet() {
    var a;
    a = document.getElementById("cos-cumparaturi");
    if (a != null) {
        a.classList.add("violet-color");
        a.classList.remove("dogerblue-color");
    }
}
function ChangeColorToBlue() {
    var a;
    a = document.getElementById("cos-cumparaturi");
    if (a != null) {
        a.classList.add("dogerblue-color");
        a.classList.remove("violet-color");
    }
}

function adunare() {
    var sum;
    sum = 35 + 41;
    document.getElementById("suma").innerText = sum;
}