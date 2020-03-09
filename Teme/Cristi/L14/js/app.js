function onSubmit(){
    var score = 0; // initializaez scorul
    var numOfQuestions = 5;// numar de intrebari din quiz
    varAnw = ["c", "b", "d", "c", "a"]; // creez sir de caractere cu raspunsurile corecte in vederea compararii cu raspunsurile alese de user

    var q1 = document.forms["quiz"]["q1"].value; //colecteza raspounsul ales in toate formurile cu numele quiz si le stocheaza. "quiz" acceseaza formul si "qi" acceseaza intrebarea
    var q2 = document.forms["quiz"]["q2"].value; 
    var q3 = document.forms["quiz"]["q3"].value; 
    var q4 = document.forms["quiz"]["q4"].value; 
    var q5 = document.forms["quiz"]["q5"].value; 

    for (var i=1; i<=numOfQuestions; i++){   //parcurg lista intrebarilor din quiz. de la 1 la 5.
        if(eval("q"+i) == ""){ //verific daca userul a bifat raspunsul intrenarilor, adica daca variabila qi a primit o valoare. (eval) ma lasa sa concatenez o variabila cu un string.
            alert("Nu ai ales raspuns pentru intrebarea " +i);
        }
    }
    for (var i=1; i<=numOfQuestions; i++){   //parcurg lista intrebarilor din quiz. de la 1 la 5.
        if(eval("q"+i) == varAnw[i-1]){//verific daca aceasta concatenare q si 1 corespunde pozitiei din litsa cu raspunsuri corecte VarAnw
            score++; //adaud la scor inca un raspuns corect
        }
    }

    var result = document.getElementById("results")
    
    document.getElementById("result").innerHTML = "Scorul tau este " + score + " puncte din "+ numOfQuestions + " puncte posibile";
    return false;
}