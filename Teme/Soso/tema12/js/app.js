
function Turn() {
    var a = document.getElementById('bec');
    if (a != null) {
        if (a.src.match("bulbon")) {
            a.src = "imagini/bulboff.png";
        }
        else {
            a.src = "imagini/bulbon.png";
        }
    }
}

