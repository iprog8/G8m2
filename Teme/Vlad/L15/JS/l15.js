function question_results() {
    var q1 = document.quiz.question1.value;
    var q2 = document.quiz.question2.value;
    var q3 = document.quiz.question3.value;
    var q4 = document.quiz.question4.value;
    var q5 = document.quiz.question5.value;
    correct_results = 0;
    incorrect_results = 0;
    console.log (q1,q2,q3,q4,q5)
    if ((q1 == null ) || (q2 == null ) || (q3 == null ) || (q4 == null) || (q5  == null)) {
        console.log("Nu ati raspuns la toate intrebarile")
    }   else if (q1 == "Vilnius"){
            correct_results++;
        }
        else {
            incorrect_results++;
        } 
        if (q2 == "Volga") {
            correct_results++;
        }
        else {
            incorrect_results++;
        }
        if (q3 == "Mont Blanc") {
            correct_results++;
        }
        else {
            incorrect_results++;
        }
        if (q4 == "Germania") {
            correct_results++;
        }
        else {
            incorrect_results++;
        }
        if (q5 == "Serbia") {
            correct_results++;
        }
        else {
            incorrect_results++;
        }
    //TODO: Check if all questions were answered 
    /*if ( "..." != 5) {
            console.warn("Nu ai raspuns la toate intrebarile");
            return;
    }*/
    show_correct_results = document.getElementById("correct");
    show_incorrect_results = document.getElementById("incorrect");
    //hidden_element.classList.remove("hidden");
    //hidden_element.classList.add("visible");
    show_correct_results.innerHTML = "Ai raspuns corect la" + " " + correct_results + " " + "intrebari";
    show_incorrect_results.innerHTML = "Ai raspuns gresit la" + " " + incorrect_results + " " + "intrebari";
    
}