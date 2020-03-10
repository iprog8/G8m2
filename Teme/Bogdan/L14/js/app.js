function Onsubmit() {
    var q1 = document.chestionar.q1.value;
    var q2 = document.chestionar.q2.value;
    var q3 = document.chestionar.q3.value;
    var q4 = document.chestionar.q4.value;
    var q5 = document.chestionar.q5.value;
    var numberOfQuestions = 5;
    correct_answers = 0;
    if ((q1 == null ) || (q2 == null ) || (q3 == null ) || (q4 == null) || (q5  == null)) {
        alert ("Nu ati raspuns la toate intrebarile !")
    }
    if(q1==1) {
        correct_answers++;
    }
    if(q2==1) {
        correct_answers++;
    }
    if(q3==1) {
        correct_answers++;
    }
    if(q4==1) {
        correct_answers++;
    }
    if(q5==1) {
        correct_answers++;
    }
    if(correct_answers==5) {
    document.getElementById("rezultat").innerHTML = "Ai răspuns corect la " + correct_answers + " întrebări din "+ numberOfQuestions + ".Felicitări! Nu faci parte din categoria cetăţenilor 'abuzaţi' ^,^";
    }
    if(correct_answers => 3 && correct_answers < 5) {
    document.getElementById("rezultat").innerHTML = "Ai răspuns corect la " + correct_answers + " întrebări din "+ numberOfQuestions + ". Nu e rău, dar stai in maşină cu mâinile pe volan când te opreşte poliţia :D";
    }
    if(correct_answers < 3) {
        document.getElementById("rezultat").innerHTML = "Ai răspuns corect la " + correct_answers + " întrebări din "+ numberOfQuestions + ". S-ar putea să simţi nevoia să strigi 'abuz' când te opreşte poliţia... n-o face :o";
    }
    return false;
}
