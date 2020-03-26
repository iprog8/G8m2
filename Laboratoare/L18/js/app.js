var vueObject = {
    el: '#app',
    data: {
        titluArticol: 'Cum sa inveti programare in 24 de ore!',
        linkAutor: 'https://invatamprogramare.ro/?team=ovidiu-rudi-trainer',
        autor: 'Ovidiu Rudi',
        primulSubtitlu: 'Ce trebuie sa stii inainte de a inata progrmare',
        primulParagraf: 'Salut aici este textul pentru primul paragraf dar am lipsa de inspiratie....',
        userLogat: false,
        numeUser: 'Alinescu Pop',
        imageSrc: '001.jpg',
        listaCunostinte: [
            { text: 'Sa stii sa scrii si sa citesti' },
            { text: 'Sa stii cat de cat limba engleza' },
            { text: 'Sa ai o gandire orientata catre rezolvarea de probleme' },
        ]
    },
    methods: {
        logout: function () {
            this.userLogat = false;
        },
        login: function () {
            this.userLogat = true;
        }
    }
};

var articol2 = {
    titluArticol: 'Cum sa inveti programare in 4 de ore!',
    linkAutor: 'https://invatamprogramare.ro/?team=mos-craiun',
    autor: 'Mos Craciun',
    primulSubtitlu: 'Primul subtitlu',
    primulParagraf: 'Salut aici este textul pentru primul paragraf dar am lipsa de inspiratie....',
    userLogat: false,
    numeUser: 'Ion Pop',
    listaCunostinte: [
        { text: 'Sa stii sa scrii si sa citesti' },
        { text: 'Sa stii cat de cat limba engleza' },
        { text: 'Sa ai o gandire orientata catre rezolvarea de probleme' },
    ]
};
vueObject.data = articol2;
var app = new Vue(vueObject);