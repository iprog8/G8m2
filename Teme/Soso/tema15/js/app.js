var divs = document.getElementsByTagName("div");
function ChangeBackgroundColorDivs() {
    for (let index = 0; index < divs.length; index++) {
        if (divs != null) {
            divs[index].classList.add("culoare-background-divs");

        }
    }
}
function ReturnToBegin() {
    for (let index = 0; index < divs.length; index++) {
        if (divs != null) {
            divs[index].classList.remove("culoare-background-divs");
        }
    }
}

function AfiseazaClaseDivs() {
    for (let index = 0; index < divs.length; index++) {
        if (divs != null) {
            if (divs[index].classList == "") {
                divs[index].classList.add("_");

            }
            alert("div-urile au urmatoarele clase: " + divs[index].classList);
        }

    }
}