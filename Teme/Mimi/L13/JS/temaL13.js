function ColoreazaAlbastru() {
    document.getElementById("cos-cumparaturi").classList.add("blue-text");
    alert("Ai colorat albastru");
}

function ColoreazaPortocaliu() {
    alert("Ai colorat portocaliu");
    document.getElementById("cos-cumparaturi").classList.add("orange-text");   
}

function CalculeazaSuma(){
    var suma = 35+41;
    document.getElementById("sum").innerText=suma;
}

function ColoreazaYellowBgrnd(){
    var bodys = document.getElementsByTagName('body');
    bodys[0].classList.add("yellowClass");
    bodys[0].classList.remove("purpleClass darkblueClass" );

}

function ColoreazaPurpleBgrnd(){
    var bodys = document.getElementsByTagName('body');
    bodys[0].classList.add("purpleClass");
    bodys[0].classList.remove("yellowClass  darkblueClass");
}

function ColoreazaDarkblueBgrnd(){
    var bodys = document.getElementsByTagName('body');
    bodys[0].classList.add("darkblueClass");
    bodys[0].classList.remove("yellowClass  purpleClass");
}