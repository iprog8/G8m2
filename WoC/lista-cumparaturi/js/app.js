function IntroduProdus(sender, event) {
    if (event.keyCode == 13) {
        console.log("s-a apasat enter");
        var produsElement = document.getElementById("produs");
        if (produsElement == null) return;
        var produs = produsElement.value;
        if (produs == "") return;
        var listaCumparaturi = document.getElementById("listaCumparaturi");
        if (listaCumparaturi == null) return;

        var li = document.createElement("li");
        //var cantitate = prompt("Ce cantitate?");
        //li.innerHTML = produs + " (" + cantitate + ') <input type="button" value="x" onclick="StergeProdus(this, event)"> ';
        li.innerHTML = produs;
        li.setAttribute("ondblclick", "MutaProdus(this, event)");
        listaCumparaturi.appendChild(li);
        sender.value = "";
    }
}

function MutaProdus(sender) {
    console.log("Am dat dblclick pe " + sender.innerText);
    var cosElement = document.getElementById("cos");
    if (cosElement == null) return;
    sender.removeAttribute("ondblclick");
    cosElement.appendChild(sender);
}

function StergeProdus(sender) {
    console.log("Am dat clic pe delete " + sender.parentElement.innerText);
    sender.parentElement.remove();
}


//=====================
//explicatii curs

function Inmultire(termen1, termen2) {
    return termen1 * termen2;
}

function zzz() {
    var dreptunghi = {
        lungime: 20,
        latime: 10
    }
    var arie = Inmultire(dreptunghi.lungime, dreptunghi.latime);
}