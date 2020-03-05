function ShowDate() {
    for (let index = 0; index < 10; index++) {
        date = new Date()
        var seconds = date.getSeconds();
        debugger
        if (seconds % 3 == 0) {
            var backgroundcolor = document.getElementById("background").classList.add("red-body")
            var backgroundcolor = document.getElementById("background").classList.remove("blue-body")
            var backgroundcolor = document.getElementById("background").classList.remove("yellow-body")
        }
        else if (seconds % 3 == 1) {
            var backgroundcolor = document.getElementById("background").classList.add("yellow-body")
            var backgroundcolor = document.getElementById("background").classList.remove("blue-body")
            var backgroundcolor = document.getElementById("background").classList.remove("red-body")
        }
        else {
            var backgroundcolor = document.getElementById("background").classList.add("blue-body")
            var backgroundcolor = document.getElementById("background").classList.remove("yellow-body")
            var backgroundcolor = document.getElementById("background").classList.remove("red-body")
        }
        alert("secundarul ceasului este: " + seconds);
    }
}