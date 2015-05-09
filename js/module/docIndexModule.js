
MyApp.module("DocIndexModule", {
    startWithParent: false,
    initialize: function (moduleName, app, options) {
        this.someProperty = 'someValue';
    }, 
    define: function (module) {
        "use strict";
        //Model定义 
        module.Model = Backbone.Model.extend({
            defaults: {
                'title': "DocIndexModule"
            }
        });
        //ItemView 定义 
        module.View = Marionette.LayoutView.extend({
            tagName: 'div',
            id: 'container',
            ui: {},
            events: {},
            /* when the view initializes, call initRouter to */
            initialize: function () { },
            render: function () {
                var that = this;
                var data = that.model.attributes;
                var html = Marionette.TemplateCache.prototype.loadTemplate("tmplDocIndex", data);

                //View加载到DOM进行显示  
                that.$el.html(html);
            }
        });
        module.init = function () {
            var vDocIndex = new module.View({
                model: new module.Model()
            });
            MyApp.RContainer.empty();
            MyApp.RContainer.show(vDocIndex);
        },
        /* add initializer, which fires when the app starts */
        module.addInitializer(function () {

        });
    },

});

