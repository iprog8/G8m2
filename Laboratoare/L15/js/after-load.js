function GetDailyMessage() {
    var date = new Date();
    var dayOfWeek = date.getDay();
    var message = '';
    switch (dayOfWeek) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            message = 'Spor la munca!';
            break;

        default:
            message = 'Spor la relaxare!';
            break;
    }

    var paragraf = document.getElementById('mesajulZilei');
    if (paragraf == null) return;
    paragraf.innerText = message;
}

function GetDailyMessageWithIf() {
    var date = new Date();
    var dayOfWeek = date.getDay();
    var message = '';

    if (dayOfWeek == 0 || dayOfWeek == 6) {
        message = 'Spor la relaxare!';
    }
    else {
        message = 'Spor la munca!';
    }

    var paragraf = document.getElementById('mesajulZilei');
    if (paragraf == null) return;
    paragraf.innerText = message;
}

GetDailyMessageWithIf();
//GetDailyMessage();