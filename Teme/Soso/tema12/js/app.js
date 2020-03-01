var a = document.getElementById('bec');
function TurnOn() {
    if (a != null) {
        a.src = 'imagini/bulbon.png';
    }
}

function TurnOff() {
    if (a != null) {
        a.src = 'imagini/bulboff.png';
    }
}
