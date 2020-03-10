function question_results() {
    var q1 = document.getElementsByName("question1");
    var q2 = document.getElementsByName("question2");
    var q3 = document.getElementsByName("question3");
    var q4 = document.getElementsByName("question4");
    var q5 = document.getElementsByName("question5");
    correct_results = 0;
    incorrect_results = 0;
    console.log(q1[1]);
    if ((q1.select == null ) || (q2 == null ) || (q3 == null ) || (q4 == null) || (q5  == null)) {
        alert("Nu ati raspuns la toate intrebarile");
        return;
    }   else if (q1 == true) {
            correct_results++;
            q1.classList.add("correct-answer");
        }
        else {
            incorrect_results++;
        } 
        if (q2.checked == true) {
            correct_results++;
            q2.classList.add("correct-answer");
        }
        else {
            incorrect_results++;
        }
        if (q3.checked == true) {
            correct_results++;
            q3.classList.add("correct-answer");
        }
        else {
            incorrect_results++;

        }
        if (q4.checked == true) {
            correct_results++;
            q4.classList.add("correct-answer");
        }
        else {
            incorrect_results++;
        }
        if (q5.checked == true) {
            correct_results++;
            q5.classList.add("correct-answer");
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

function checkAnswer() { 
    correct_results = 0;
    incorrect_results = 0;
    var answer1 = document.getElementsByName('question1'); 
    console.log(answer1[1].value);
    for (i = 0;i < answer1.length;i++) {
        selected_elem = document.getElementById(answer1[i].value)
        console.log(selected_elem)
        if(answer1[i].checked) { 
            if (answer1[i].value == "Vilnius") {
                correct_results++
                selected_elem.classList.add("correct-answer")
            } else {
                incorrect_results++
                selected_elem.classList.add("incorrect-answer")
            }
        }
    }
    console.log(correct_results)
    console.log(incorrect_results)
    show_correct_results = document.getElementById("correct");
    show_incorrect_results = document.getElementById("incorrect");
    show_correct_results.innerHTML = "Ai raspuns corect la" + " " + correct_results + " " + "intrebari";
    show_incorrect_results.innerHTML = "Ai raspuns gresit la" + " " + incorrect_results + " " + "intrebari";
}   
/* Hint: Pentru A vedea daca un input type=radio este selectat folositi:
var answer = document.getElementById("zzz");
if (answer.checked == true) corectAnswewrs++; */

function checkAnswerv2() { 
    correct_results = 0;
    incorrect_results = 0;
    correct_answers = ['Vilnius','Volga','Mont Blanc','Germania','Serbia']
    for (let i = 1; i <= 5; i++) {
        var answer = document.getElementsByName("question" + i)
        for (let j = 0; j < answer.length; j++) {
            selected_elem = document.getElementById(answer[j].value);
            selected_elem.classList.remove("correct-answer")
            selected_elem.classList.remove("incorrect-answer")
            if (answer[j].checked) {
                if (correct_answers.includes(answer[j].value)) {
                    correct_results++;
                    selected_elem.classList.add("correct-answer");
                } else { 
                    incorrect_results++
                    selected_elem.classList.add("incorrect-answer") 
                }
            }
        }
    }
    if (correct_results + incorrect_results != 5) {
        alert("Nu ai raspuns la toate intrebarile")
        return;
    }
    console.log(correct_results)
    console.log(incorrect_results)
    show_correct_results = document.getElementById("correct");
    show_incorrect_results = document.getElementById("incorrect");
    show_correct_results.innerHTML = "Ai raspuns corect la" + " " + correct_results + " " + "intrebari";
    show_incorrect_results.innerHTML = "Ai raspuns gresit la" + " " + incorrect_results + " " + "intrebari";
}