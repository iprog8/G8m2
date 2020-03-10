function AnalizeAnswers() {
    var answers = 0;
    var corectAnswewrs = 0;
    //answer 1
    var answer = document.getElementById("q1-c");
    if (answer == null) return;
    if (answer.checked) corectAnswewrs++;
    answers++;
    //answer 2
    answer = document.getElementById("q2-d");
    if (answer == null) return;
    if (answer.checked) corectAnswewrs++;
    answers++;
    SetDivResult(corectAnswewrs, answers);
    SetPopupResult(corectAnswewrs, answers);
}

function SetPopupResult(corectAnswewrs, answers) {
    var result = document.getElementById("testResult2");
    if (result == null) return;
    result.innerText = "Ai raspuns corect la " + corectAnswewrs + " intrebari din " + answers + ".";

    var popup = document.getElementById("popupResult");
    if (popup == null) return;
    popup.classList.remove("popup-closed");
    popup.classList.add("popup");
}
//
function SetDivResult(corectAnswewrs, answers) {
    //test result
    var result = document.getElementById("testResult");
    if (result == null) return;
    result.innerText = "Ai raspuns corect la " + corectAnswewrs + " intrebari din " + answers + ".";
    //set color
    var classDisplay = SetColorClass(corectAnswewrs, answers);
    result.classList.add(classDisplay);
    result = document.getElementById("testDiv");
    if (result == null) return;
    result.classList.remove("data-done");
}

function SetColorClass(corectAnswewrs, answers) {
    var classDisplay = '';
    if (corectAnswewrs / answers > 0.7) {
        classDisplay = "alert-success";
    }
    else if (corectAnswewrs / answers > 0.4) {
        classDisplay = "alert-warning";
    }
    else {
        classDisplay = "alert-danger";
    }
    return classDisplay;
}

//make labels clickable
function CheckRadio(e) {
    var id = e.id.replace("-span", "");
    var radioBtn = document.getElementById(id);
    if (radioBtn == null) return;
    radioBtn.checked = true;
}

//close popup
function Close(e) {
    var popup = document.getElementById("popupResult");
    if (popup == null) return;
    popup.classList.remove("popup");
    popup.classList.add("popup-closed")
}