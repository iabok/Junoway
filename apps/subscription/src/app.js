define(['jquery', 'backbone', 'views/home/main'], function ($, Backbone, HomeView) {

	var $content = $('.main-app');
    var $bgContent = document.getElementById('juno-body').style.background="#ffffff";
    //var menuView = new MenuView({el: $subContent});

    return Backbone.Router.extend({

        routes: {
            "": "home",
            "contact": "contact",
            "subscription": "subscription",
            "subscription/practitioners": "practitioners",
            "subscription/facilitators": "facilitators"
        },

        home: function () {
            var homeView = new HomeView({el: $content });
            homeView.render();
            $('.flexslider').flexslider( {animation: "fade", controlNav: false, directionNav: false});
        },

        contact: function () {
            require(["views/contact/contact"], function (ContactView) {
                var view = new ContactView({el: $content});
                view.render();
            });
        },

        subscription: function () {
            require(["views/subscription/homepage"], function (SubscribeView) {
                var subscribeView = new SubscribeView({el: $content});
                subscribeView.render();                              
                $("#sub-warning").modal('show');
                $bgContent;
                
            });
        },

        practitioners: function () {
            require(["views/subscription/practitioner"], function (PractitionerView) {
                var practitionerView = new PractitionerView({el: $content});
                practitionerView.render();
                $bgContent;
            });
        },

        facilitators: function () {
            require(["models/subscription/facilitator", "views/subscription/facilitator"], function (SignUpModel, FacilitatorView) {
                var facilitatorView = new FacilitatorView({el: $content,  model: new SignUpModel.SignUpModel() });
                facilitatorView.render();
                $( '#dateOfIssue, #dateOfExpiry' ).datepicker();
                $bgContent;
            });
        }
    });

});