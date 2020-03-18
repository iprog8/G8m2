function IntroduProdus(sender, event) {
    if (event.keyCode == 13) {
        console.log('s-a apasat enter');
        var produsElement = document.getElementById('produs');
        if (produsElement == null) {
            return;
        }
        var produs = produsElement.value;
        if (produs == "") {
            return;
        }
        var cantitate = prompt("Ce cantitate vrei?");
        var listaCumparaturi = document.getElementById('listaCumparaturi');
        if (listaCumparaturi == null) {
            return;
        }
        var li = document.createElement('li');
        li.innerHTML = produs + "(" + cantitate + ")" + '<input type="button" value = "x" onclick="StergeProdus(this, event)">';
        li.setAttribute("ondblclick", "MutaProdus(this, event)");
        listaCumparaturi.appendChild(li);
        sender.value = "";
    }
}
function MutaProdus(sender, event) {
    console.log("am dat click pe " + sender.innerText);
    var cosElement = document.getElementById("cos");
    if (cosElement == null) {
        return;
    }
    sender.removeAttribute("ondblclick");
    cosElement.appendChild(sender);
}
function StergeProdus(sender, event) {
    console.log("am dat click pe delete " + sender.parentElement.innerHTML);
    sender.parentElement.remove();
}