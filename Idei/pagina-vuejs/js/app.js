var articolProgramare = {
    titluArticol: 'De ce sa inveti programare?',
    autor: 'Ovidiu Rudi',
    urlAutor: 'https://invatamprogramare.ro/?team=ovidiu-rudi-trainer',
    intro: 'Acesta este doar un articol de test',
    titleIntro: 'De ce am ales VueJS',
    isLogged: true,
    loggedUser: 'First User',
    primulSubtitlu: '1. Ce trebuie sa stii ca sa poti invata VueJS?',
    skilluri: [
        { text: 'Trebuie sa stii HTML' },
        { text: 'CSS nu trebuie sa stii' },
        { text: 'Trebuie sa stii JavaScript' },
    ]
};

var jsonData = {
    el: '#app',
    data: {
        titluArticol: 'Ce este VueJS?',
        autor: 'Ovidiu Rudi',
        urlAutor: 'https://invatamprogramare.ro/?team=ovidiu-rudi-trainer',
        intro: 'In acest articol mi-am propus sa vorbesc despre VueJS pentru ca in ultimii ani framework-urile de frontend de tip MV(something) au devenit la moda. Si de aceea am renuntat sa mai vorbesc despre jQuery. Alaturi de VueJs, alte framework-uri similare sunt: Angular si ReactJS. Si am ales VueJS pentru ca este cel mai simplu dintre toate',
        titleIntro: 'De ce am ales VueJS',
        isLogged: true,
        loggedUser: 'First User',
        primulSubtitlu: '1. Ce trebuie sa stii ca sa poti invata VueJS?',
        skilluri: [
            { text: 'Trebuie sa stii HTML' },
            { text: 'CSS nu trebuie sa stii' },
            { text: 'Trebuie sa stii JavaScript' },
        ]
    },
    methods: {
        logOut: function () {
            this.isLogged = false;
        },
        logIn: function () {
            this.isLogged = true;
        },
    }
};
var app = new Vue(jsonData);