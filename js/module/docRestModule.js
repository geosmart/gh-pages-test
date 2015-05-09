
MyApp.module("DocRestModule", {
    startWithParent: false,
    initialize: function (moduleName, app, options) {
        this.someProperty = 'someValue';

    }, 
    define: function (module) {
        "use strict"; 
        module.onStart = function (options) {
            console.log("DocRestModule start");
        };
        module.onStop = function (options) {
            console.log("DocRestModule stop");
        };
        //Model定义 
        module.Model = Backbone.Model.extend({
            defaults: {
                'title': "DocRestModule"
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
                var html = Marionette.TemplateCache.prototype.loadTemplate("tmplDocRest", data);

                //View加载到DOM进行显示  
                that.$el.html(html);
            }
        });
        module.init = function () {
            var vDocRest = new module.View({
                model: new module.Model()
            });
            MyApp.RContainer.empty();
            MyApp.RContainer.show(vDocRest);
        },
        /* add initializer, which fires when the app starts */
        module.addInitializer(function () {
            console.log("DocRestModule init");
        });
    },

});

