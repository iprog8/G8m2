
function Turn() {
    imagePlace = document.getElementById("lightImg")
    if (imagePlace != null) {
        if (imagePlace.src.includes("images/bulbon.png")) {
            imagePlace.src = "images/bulboff.png";
            imagePlace.alt = "Becul este stins";
            imagePlace.title = "Becul este stins";
        }
        else {
            imagePlace.src = "images/bulbon.png";
            imagePlace.alt = "Becul este aprins";
            imagePlace.title = "Becul este aprins";
        }
    }
}

