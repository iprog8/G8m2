
var appHeader = new Vue({
    el: '#header',
    data: {
        name1: 'Cambia',
        name2: 'Software',
        home: 'Cambia software',
        about: 'Despre noi',
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
        motto: 'Aplicatiile noastre iti Cambia business-ul in bine',
        readMore: 'Afla mai multe despre Cambia Software'
    },
    methods: {
    }
});

var appLanding = new Vue({
    el: '#landingArea',
    data: {

    },
    methods: {
    }
});