
var appHeader = new Vue({
    el: '#header',
    data: {
        name1: 'Cambia',
        name2: 'Software',
        home: 'Cambia software',
        howWorks: 'Cum lucram?',
        mobileReady: 'Mobile ready',
        features: 'Beneficii',
        screenshots: 'Poze aplicatie',
        screenshotsVisibility: true,
        team: 'Echipa',
        pricing: 'Preturi',
        blog: 'Blog',
        contact: 'Contacteaza-ne'
    },
    methods: {
        endPromotion: function () {
            debugger
            var date = new Date()
            //lunile sunt de la 0 la 11
            if (date.getFullYear() > 2020 || date.getMonth() > 1) {
                this.screenshotsVisibility = false
            }
        },
        //aici trebuia apelata end promotion
        created: function () {
            this.endPromotion()
        }
    }
});

var appLanding = new Vue({
    el: '#landingArea',
    data: {
        welcome: 'Bine ai venit la Cambia Software',
        motto: 'Aplicatiile noastre iti schimba business-ul in bine',
        readMore: 'Cum lucram?'
    },
    methods: {
    }
});

var appGetStarted = new Vue({
    el: '#get-started',
    data: {
        title: 'Implementare in pasi simpli',
        subtitle: 'Pasii nu sunt batuti in cuie dar am observat ca acestia functioneaza',
        steps: [
            {
                image: 'img/svg/cloud.svg',
                title: '1. Dorinte',
                text: 'Tu ne spui ce iti doresti de la site si noi iti dam o estimare la ceea ce iti doresti',
                readMore: 'Detalii',
                readMoreLink: 'dorinte.html',
                addRow: 0
            },
            {
                image: 'img/svg/planet.svg',
                title: '2. Identitatea ta',
                text: 'Vii cu identitatea ta (textele pentru site) dar care poate include poze, culori si logo',
                readMore: 'Detalii',
                readMoreLink: 'identitatea-ta.html',
                addRow: 0
            },
            {
                image: 'img/svg/paint-palette.svg',
                title: '3. Aspect site',
                text: 'Alegi layout-ul si paleta de culori din cele 3 propuse de noi \n',
                readMore: 'Detalii',
                readMoreLink: 'aspect-site.html',
                addRow: 1
            },
            {
                image: 'img/svg/design-tool.svg',
                title: '4. Finisaje',
                text: 'Dupa ce iti livram site-ul facem mici ajustari pentru a-l face sa arate asa cum iti doresti',
                readMore: 'Detalii',
                readMoreLink: 'finisaje.html',
                addRow: 0
            },
        ]
    },
    methods: {
    }
});

var appMobileReady = new Vue({
    el: '#mobile-ready',
    data: {
        title1: 'Site-urile',
        title2: 'Cambia Software',
        title3: 'sunt mobile ready',
        description: `Pentru ca in ziua de azi peste 50% din vizitatorii unui site vin de pe telefoane mobile 
        este impetuos necesar ca orice site creat sa se vada bine pe aceste device-uri si sa aiba scurtaturile necesare 
        pentru a putea fi usor de contactat via Email, Telefon si WhatsApp`
    },
    methods: {

    }
})