MyApp.DocRestModule = {};

(function (Backbone, _, $) {
    //Model定义 
    MyApp.DocRestModule.Model = Backbone.Model.extend({
        defaults: {
            'test': null,
        }
    });

    //View定义 
    MyApp.DocRestModule.View = Marionette.ItemView.extend({
        el: '#container',
        render: function () {
            var that = this;
            var html = Marionette.TemplateCache.prototype.loadTemplate("tmplDocRest", {});

            //View加载到DOM进行显示  
            that.$el.append(html);
        }
    });
})(Backbone, _, $);

