function ClickMe(){
    alert ("Click meee!")
}
function TurnOn(){
     var imagePlace = document.getElementById('lightImg');
        if(imagePlace !=null){
             imagePlace.src = "images/bulbon.png";
             imagePlace.alt = "Becul este aprins";
             imagePlace.title = "Becul este aprins";
             
        }
    }
function Turnoff(){
    var imagePlace2 = document.getElementById("lightImg");
    if (imagePlace2 !=null){
        imagePlace2.src = "images/bulboff.png"
        imagePlace2.title = "Becul este stins"
    }
}

    