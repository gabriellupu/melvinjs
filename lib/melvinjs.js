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

    var Application = Melvin.Application = Marionette.Application.extend({
        onStart: function() {
            Backbone.history.start();
        }
    });
    var Renderer = Melvin.Renderer = {
        render: function(template, data) {
            if (!template) {
                throw new Marionette.Error({
                    name: 'TemplateNotFoundError',
                    message: 'Cannot render the template since its false, null or undefined.'
                });
            }
    
            var templateFunc = _.isFunction(template) ? template : window.JST[template];
            // TODO data already contains the template helpers so they are duplicated here
            return templateFunc(_.extend({}, {model: data}));
        }
    };
    
    Marionette.Renderer = Renderer;
    var View = Melvin.View = Marionette.View.extend({
        _renderTemplate: function() {
            var template = this.getTemplate();
    
            // Allow template-less views
            if (template === false) {
                return;
            }
    
            // Add in entity data and template context
            var data = this.mixinTemplateContext(this.serializeData());
    
            // Render and add to el
            var html = Melvin.Renderer.render(template, data, this);
            this.attachElContent(html);
        }
    });
    var CollectionView = Melvin.CollectionView = Marionette.CollectionView;

    return Melvin;
}));
