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