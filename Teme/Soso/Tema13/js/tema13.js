var color = document.getElementsByTagName("body");
function RedBackgroundChange() {
    color[0].classList.add("red-background");
    color[0].classList.remove("yellow-background");
    color[0].classList.remove("blue-background");
}
function YellowBackgroundChange() {
    color[0].classList.add("yellow-background");
    color[0].classList.remove("red-background");
    color[0].classList.remove("blue-background");
}
function BlueBackgroundChange() {
    color[0].classList.add("blue-background");
    color[0].classList.remove("yellow-background");
    color[0].classList.remove("red-background");
}
function AfiseazaData() {
    var date = new Date()
    var seconds = date.getSeconds();
    for (var index = 1; index < 10; index++) {
        document.getElementById('btn').innerText = date;
        alert(seconds)
    }
    if (seconds % 2 == 0) {
        document.getElementsByTagName("body")[0].classList.add("green-background");
        document.getElementsByTagName("body")[0].classList.remove("pink-background");
    }
    else {
        document.getElementsByTagName("body")[0].classList.add("pink-background");
        document.getElementsByTagName("body")[0].classList.remove("green-background");
    }




}