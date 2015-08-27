var Application = Melvin.Application = Marionette.Application.extend({
    onStart: function() {
        Backbone.history.start();
    }
});