/*jshint camelcase: false */
require.config({
    paths: {
        jquery: '/node_modules/jquery/dist/jquery.min',
        underscore: '/node_modules/underscore/underscore-min',
        backbone: '/node_modules/backbone/backbone-min',
        marionette: '/node_modules/backbone.marionette/lib/backbone.marionette',
        melvin: '/node_modules/melvinjs/lib/melvinjs',
        bootstrap: '/node_modules/bootstrap/dist/js/bootstrap',
        templates: '../templates'
    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        },
        app: {
            deps: ['melvin', 'bootstrap', 'templates']
        }
    }
});