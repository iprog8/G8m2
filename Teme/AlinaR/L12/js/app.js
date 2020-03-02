
function SchimbaRosu() {
    var culoare = document.getElementById("cos-cumparaturi")
    if (culoare != null) { culoare.style = "color:red" }
}
function SchimbaVerde() {
    var culoare = document.getElementById("cos-cumparaturi")
    if (culoare != null) { culoare.style = "color:green" }
}

function CalculeazaSuma() {
    var s = 35 + 41;
    document.getElementById("cos-cumparaturi").innerText = "valoarea cosului tau este: " + s
}