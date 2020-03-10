var color = document.getElementsByTagName("body");
function changebgtored() {
    color[0].classList.add("bg-color-red");
    color[0].classList.remove("bg-color-blue");
    color[0].classList.remove("bg-color-green");
}
function changebgtoblue() {
    color[0].classList.add("bg-color-blue");
    color[0].classList.remove("bg-color-red");
    color[0].classList.remove("bg-color-green");
}
function changebgtogreen() {
    color[0].classList.add("bg-color-green");
    color[0].classList.remove("bg-color-blue");
    color[0].classList.remove("bg-color-red");
}