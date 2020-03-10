function CalculeazaPunctaj() {
    var correctAnswers = 0;
    var wrongAnswers = 0;
    debugger
    for (let i = 1; i <= 5; i++) {
        var questionnumber = document.getElementsByName("group" + i)
        for (let j = 0; j < questionnumber.length; j++) {
            var selection = questionnumber[j];
            var validare = selection.checked;
            if (validare == true) {
                if (selection.value == "wrong") { wrongAnswers++; }
                else { correctAnswers++; }
            }

        }
    }
    if (correctAnswers + wrongAnswers < 5) {
        alert("Nu ai raspuns la toate intrebarile")
        return;
    }
    var afiseazaDiv = document.getElementById("score");
    switch (correctAnswers) {
        case 0:
        case 1:
        case 2:
            afiseazaDiv.innerText = "Numarul de raspunsuri corecte este: " + correctAnswers + ". Mai invata si reia testul";
            afiseazaDiv.classList.add("fail");
            afiseazaDiv.classList.remove("okish");
            afiseazaDiv.classList.remove("success");
            break;
        case 3:
        case 4:
            afiseazaDiv.innerText = "Numarul de raspunsuri corecte este: " + correctAnswers + ". Ai o memorie bunicica";
            afiseazaDiv.classList.add("okish");
            afiseazaDiv.classList.remove("fail");
            afiseazaDiv.classList.remove("success");
            break;
        case 5:
            afiseazaDiv.innerText = "Numarul de raspunsuri corecte este " + correctAnswers + ". Pare ca Africa este pasiunea ta";
            afiseazaDiv.classList.add("success");
            afiseazaDiv.classList.remove("okish");
            afiseazaDiv.classList.remove("fail");
            break;
    }
}

