function raspunsuri() {
    correctquestions = 0;
    incorrectquestions = 0;
    var q1 = document.quiz.question1.value;
    var q2 = document.quiz.question2.value;
    var q3 = document.quiz.question3.value;
    var q4 = document.quiz.question4.value;
    var q5 = document.quiz.question5.value;
    if (q1 == 'Doom') {
        correctquestions++;
    }
    else {
        incorrectquestions++;
    }
    if (q2 == 'Trevor Philips') {
        correctquestions++;
    }
    else {
        incorrectquestions++;
    }
    if (q3 == 'Grove-street') {
        correctquestions++;
    }
    else {
        incorrectquestions++;
    }
    if (q4 == 'Wolfenstein') {
        correctquestions++;
    }
    else {
        incorrectquestions++;
    }
    if (q5 == 'Sonic') {
        correctquestions++;
    }
    else {
        incorrectquestions++;
    }
    if (correctquestions == 5) {
        alert('Bravo ai raspuns corect la toate intrebarile!');
    }
    show_c_r = document.getElementById('raspunsuri-corecte');
    show_i_r = document.getElementById('raspunsuri-incorecte');
    show_c_r.innerHTML = "Ai raspuns corect la" + " " + correctquestions + " " + "intrebari";
    show_i_r.innerHTML = "Ai raspuns gresit la" + " " + incorrectquestions + " " + "intrebari";
}