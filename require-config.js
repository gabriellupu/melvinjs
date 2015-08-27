/*jshint camelcase: false */
require.config({
    paths: {
        jquery: '../bower_components/jquery/dist/jquery.min',
        underscore: '../bower_components/underscore/underscore-min',
        backbone: '../bower_components/backbone/backbone-min',
        marionette: '../bower_components/backbone.marionette/lib/backbone.marionette',
        melvin: '../bower_components/melvinjs/lib/melvinjs',
        templates: '../tmp/templates'
    },
    shim: {
        app: {
            deps: ['melvin', 'templates']
        }
    }
});