
function Turn() {
    imagePlace = document.getElementById("lightImg")
    if (imagePlace != null) {
        if (imagePlace.src == "file:///C:/Users/alina.rudi/Desktop/G8m2-1/Teme/AlinaR/L12/images/bulboff.png") {
            imagePlace.src = "file:///C:/Users/alina.rudi/Desktop/G8m2-1/Teme/AlinaR/L12/images/bulbon.png";
            imagePlace.alt = "Becul este aprins";
            imagePlace.title = "Becul este aprins";
        }
        else {
            if (imagePlace.src == "file:///C:/Users/alina.rudi/Desktop/G8m2-1/Teme/AlinaR/L12/images/bulbon.png") {
                imagePlace.src = "file:///C:/Users/alina.rudi/Desktop/G8m2-1/Teme/AlinaR/L12/images/bulboff.png";
                imagePlace.alt = "Becul este stins";
                imagePlace.title = "Becul este stins";
            }
            else {
                imagePlace.src = "file:///C:/Users/alina.rudi/Desktop/G8m2-1/Teme/AlinaR/L12/images/bulbon.png";
                imagePlace.alt = "Becul este aprins";
                imagePlace.title = "Becul este aprins";
            }

        }

    }
    else {
        console.warn("nu am gasit unde sa pun becul")
    }
}

