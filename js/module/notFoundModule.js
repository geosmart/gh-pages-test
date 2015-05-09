
MyApp.module("NotFoundModule", {
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
                'title': "404"
            }
        }); 
        //ItemView 定义 
        module.View = Marionette.LayoutView.extend({
            tagName: 'div',
            id: 'container', 
            ui: { },
            /* when the view initializes, call initRouter to */
            initialize: function () {
                //this.initRouter();
            },
            render: function () {
                var that = this;
                var data = that.model.attributes;
                var html = Marionette.TemplateCache.prototype.loadTemplate("tmplNotFound", data);

                //View加载到DOM进行显示  
                that.$el.html(html);
            }
        });
        /* add initializer, which fires when the app starts */
        module.addInitializer(function () {
            var v404 = new module.View({
                model: new module.Model()
            });
            MyApp.RContainer.show(v404);
        });
    },

});