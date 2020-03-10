function DailyMessage() {
    var date = new Date();
    var dayOfWeek = date.getDay();
    switch (dayOfWeek) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            message = "Spor la munca!";
            break;

        default:
            message = "Spor la relaxare!";
            break
    }
    var paragraf = document.getElementById('mesajulZileil')
    if (paragraf == null) return null;
    paragraf.innerText = message;
}

function DailyMessageCuIf() {
    var date = new Date();
    var dayOfWeek = date.getDay();
    var message = "";
    if (dayOfWeek = date.getDay();
    var message = "";

    if (dayofWeek == 0 || dayOfWeek == 6) {
        message = "Spor la relaxare!";
    }

    var paragraf = document.getElementById("mesajulZilei");

}