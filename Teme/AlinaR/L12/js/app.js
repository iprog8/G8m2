
function SchimbaRosu() {
    var culoare = document.getElementById("cos-cumparaturi").classList.remove("verde")
    var culoare = document.getElementById("cos-cumparaturi").classList.add("rosu")
}
function SchimbaVerde() {
    var culoare = document.getElementById("cos-cumparaturi").classList.remove("rosu")
    var culoare = document.getElementById("cos-cumparaturi").classList.add("verde")
}

function CalculeazaSuma() {
    var s = 35 + 41;
    document.getElementById("cos-cumparaturi").innerText = "valoarea cosului tau este: " + s
}