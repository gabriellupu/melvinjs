var View = Melvin.View = Marionette.View.extend({
    _renderTemplate: function() {
        var template = this.getTemplate();

        // Allow template-less item views
        if (template === false) {
            return;
        }

        if (!template) {
            throw new Marionette.Error({
                name: 'UndefinedTemplateError',
                message: 'Cannot render the template since it is null or undefined.'
            });
        }

        // Add in entity data and template helpers
        var data = this.mixinTemplateHelpers(this.serializeData());

        // Render and add to el
        var html = Melvin.Renderer.render(template, data, this);
        this.attachElContent(html);

        return this;
    }
});