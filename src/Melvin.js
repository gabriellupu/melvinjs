(function(root, factory) {

    if (typeof define === 'function' && define.amd) {
        define(['underscore', 'backbone', 'marionette'], function(_, Backbone, Marionette) {
            return factory(_, Backbone, Marionette);
        });
    } else if (typeof exports !== 'undefined') {
        var _ = require('underscore');
        var Backbone = require('backbone');
        var Marionette = require('marionette');
        module.exports = factory(_, Backbone, Marionette);
    } else {
        factory(root._, root.Backbone, root.Marionette);
    }

}(this, function(_, Backbone, Marionette) {
    "use strict";

    var Melvin = Backbone.Melvin = {};

    // @include Application.js
    // @include Renderer.js
    // @include View.js
    // @include Views.js

    return Melvin;
}));
