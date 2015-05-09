
//加载模板
Backbone.Marionette.TemplateCache.prototype.loadTemplate = function (templateId, data) {
    var template = '';
    var url = siteRoot + '/tmpl/' + templateId + '.html';

    // Load the template by fetching the URL content synchronously.
    Backbone.$.ajax({
        async: false,
        url: url,
        success: function (templateHtml) {
            template = _.template(templateHtml)(data); 
        }
    });
    return template;
};
