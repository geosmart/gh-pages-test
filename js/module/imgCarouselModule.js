
MyApp.module("ImgCarouselModule", {
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
            id: 'imgCarousel',
            ui: {},
            events: {},
            /* when the view initializes, call initRouter to */
            initialize: function () { },
            render: function () {
                var that = this;
                var data = that.model.attributes;
                var html = Marionette.TemplateCache.prototype.loadTemplate("tmplImgCarousel", data);

                //View加载到DOM进行显示  
                that.$el.html(html);
                $('.carousel', that.$el).carousel({ 
                });
            }
        });
        module.init = function () {
            var vImgCarousel = new module.View({
                model: new module.Model()
            });
            MyApp.RImgCarousel.empty();
            MyApp.RImgCarousel.show(vImgCarousel);
        },
        /* add initializer, which fires when the app starts */
        module.addInitializer(function () {

        });
    },

});

