require.config({
    baseUrl: "../src",
    paths: {
        // App deps
        "jquery": "../components/jquery/jquery",
        "select2": "../components/select2/select2.amd.full",
        "underscore": "../components/underscore-amd/underscore",
        "backbone": "../components/backbone-amd/backbone",

        //Include in shim because it doesn't support AMD
        "datepicker": "../components/date-picker/jquery-dateFormat",
        //Include in shim because it doesn't support AMD
        "date-ui": "../components/date-ui/jquery-ui.min",

        "backbone-validation": "../components/backbone-validation/dist/backbone-validation-amd-min",
        "stickit": "../components/backbone-stickit/backbone-stickit",
        "handlebars": "../components/handlebars/handlebars.runtime",


        // Dev / Test deps
        "chai": "../components/chai/chai",
        "test": "../test",

        // Include bootstrap and flexslider as a shim as it doesn't support AMD. See PR at https://github.com/twitter/bootstrap/pull/534
        "bootstrap": "../components/bootstrap/dist/js/bootstrap",
        "flexslider": "../components/flexslider/jquery.flexslider"
        
    },
    shim: {
        'bootstrap': {
            deps: ['jquery']
        },
        'flexslider': {
            deps: ['jquery']
        },
        'stickit': {
            exports: 'stickit'
        },
        'ddatepicker': {
            deps: ['jquery'],
            exports: 'datepicker'
        },
        'date-ui': {
            deps: ['jquery'],
            exports: 'date-ui'
        }
    },
    urlArgs: "bust=" + (new Date()).getTime() // cache-busting for development
});
