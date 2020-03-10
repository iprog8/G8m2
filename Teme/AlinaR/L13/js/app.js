function ShowDate() {
    for (let index = 0; index < 10; index++) {
        var date = new Date()
        var seconds = date.getSeconds();
        debugger;
        var backgroundcolor = document.getElementById("background");
        if (backgroundcolor != null) {
            if (seconds % 3 == 0) {
                backgroundcolor.classList.add("red-body");
                backgroundcolor.classList.remove("blue-body");
                backgroundcolor.classList.remove("yellow-body");
            }
            else if (seconds % 3 == 1) {
                backgroundcolor.classList.add("yellow-body");
                backgroundcolor.classList.remove("blue-body");
                backgroundcolor.classList.remove("red-body");
            }
            else {
                backgroundcolor.classList.add("blue-body");
                backgroundcolor.classList.remove("yellow-body");
                backgroundcolor.classList.remove("red-body");
            }
        }
        alert("secundarul ceasului este: " + seconds);
    }
}