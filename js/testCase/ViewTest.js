MyApp.DocRestModule = {};

(function (Backbone, _, $) {
    //Model���� 
    MyApp.DocRestModule.Model = Backbone.Model.extend({
        defaults: {
            'test': null,
        }
    });

    //View���� 
    MyApp.DocRestModule.View = Marionette.ItemView.extend({
        el: '#container',
        render: function () {
            var that = this;
            var html = Marionette.TemplateCache.prototype.loadTemplate("tmplDocRest", {});

            //View���ص�DOM������ʾ  
            that.$el.append(html);
        }
    });
})(Backbone, _, $);

