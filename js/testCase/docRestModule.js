
MyApp.module("DocRestModule", {
    startWithParent: false,
    initialize: function (moduleName, app, options) {
        this.someProperty = 'someValue';
    },
    onStart: function (options) {
    },

    onStop: function (options) {
    },
    define: function (module) {
        "use strict";
        //Model定义 
        module.Model = Backbone.Model.extend({
            defaults: {
                'title': "DocRest"
            }
        });
        //ItemView 定义 
        module.View = Marionette.LayoutView.extend({
            tagName: 'div',
            id: 'DocRest',
            ui: {},
            events: { },
            /* when the view initializes, call initRouter to */
            initialize: function () { },
            render: function () {
                var that = this;
                var data = that.model.attributes;
                var html = Marionette.TemplateCache.prototype.loadTemplate("tmplDocRest", data);

                //View加载到DOM进行显示  
                that.$el.html(html);
            }
        });
        /* add initializer, which fires when the app starts */
        module.addInitializer(function () {
            var vDocRest = new module.View({
                model: new module.Model()
            });
            MyApp.RDocRest.show(vDocRest);
        });
    },

});

