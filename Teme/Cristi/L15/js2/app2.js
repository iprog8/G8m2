function SchimbaCuloareaDivurilor(){
    var x = document.getElementsByTagName("div");//x colecteaza toate elementele formate din tag-ul div
    var i;
    for (i = 0; i < x.length; i++) {// si pentru a le schimba culoarea parcurge o lista
    x[i].style.color = "green";// la fiecare incrementare gaseste un div si ii schimba culoarea in verde
  }

}
function AfiseazaClasaDivurilor(){
    var x = document.getElementsByTagName("div");
    var i;
    for (i = 0; i < x.length; i++) {
        alert("Divul nr " + (i + 1) + " are clasa " + x[i].classList);
    }
}