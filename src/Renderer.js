var Renderer = Melvin.Renderer = {
    render: function(template, data, view) {
        if (!template) {
            throw new Marionette.Error({
                name: 'TemplateNotFoundError',
                message: 'Cannot render the template since its false, null or undefined.'
            });
        }

        var templateFunc = _.isFunction(template) ? template : window.JST[template];
        // TODO data already contains the template helpers so they are duplicated here
        return templateFunc(_.extend({}, {model: data}, view.templateHelpers));
    }
};

Marionette.Renderer = Renderer;