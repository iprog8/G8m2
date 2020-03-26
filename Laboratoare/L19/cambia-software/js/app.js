
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
            if (date.getFullYear() > 2020 || date.getMonth() > 1) {
                this.screenshotsVisibility = false
            }
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