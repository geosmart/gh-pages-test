 
MyApp.module('HeaderModule', function (module, App, Backbone, Marionette, $, _) {
    "use strict";

    /* the layout for the main view */
    module.AppLayoutView = Marionette.LayoutView.extend({
        tagName: 'div',
        id: 'AppLayoutView',
        template: '#template-AppLayoutView',

        regions: {
            'contentRegion': '#ContentRegion'
        },
        ui: {
            'navHome': '#nav-home',
            'navInfo': '#nav-info'
        },
        events: {
            'click #nav-home': 'onNavHomeClicked',
            'click #nav-info': 'onNavInfoClicked'
        },

        /* when the view initializes, call initRouter to */
        initialize: function () {
            this.initRouter();
        },

        /* once the DOM is ready, start the Backbone history manager.
			This will cause the application to synch up with the 
			current route of the browser, e.g. #home or #info.
			This must be called onRender instead of on initialize
			because it immediately tries to render the appropriate view
			into the contentRegion. Also: If you don't start the backbone
			history, the router won't work. */
        onRender: function () {
            if (!Backbone.History.started) Backbone.history.start();
        },

        /* initialize the AppRouter, which synchs the application
			to the browser navigation */
        initRouter: function () {

            // cache reference to 'this' in the module scope
            var capturedThis = this;

            // assign route handlers to specific routes.
            // In this case, 'home' is triggered when the browser
            // visits index.html#home. Likewise index.html#info.
            // the empty set is for an address with no hash.
            var appRouteHandler = {
                '': 'onHomeRoute',
                'home': 'onHomeRoute',
                'info': 'onInfoRoute'
            }

            // controller which contains the methods which
            // are used as route handlers. These are referenced
            // in the appRoutes object above.
            var appRouterController = {
                onHomeRoute: function () {
                    capturedThis.onHomeNavigated();
                },
                onInfoRoute: function () {
                    capturedThis.onInfoNavigated();
                }
            };

            // define an AppRouter constructor
            var router = Marionette.AppRouter.extend({});

            // create a new instance of the AppRouter
            // and assign the routes and controller
            var appRouter = new router({
                appRoutes: appRouteHandler,
                controller: appRouterController
            });
        },

        /* called when the router sees that we have met the criteria
			to trigger the 'onHomeRoute' handler */
        onHomeNavigated: function () {

            // define and display an instance of the HomeLayoutView
            var homeLayoutView = new module.HomeLayoutView();
            this.contentRegion.show(homeLayoutView);

            // update the navigation
            this.$el.find('.navButton.active').removeClass('active');
            this.ui.navHome.addClass('active');
        },

        /* called when the router sees that we have met the criteria
			to trigger the 'onInfoRoute' handler */
        onInfoNavigated: function () {
            var infoLayoutView = new module.InfoLayoutView();
            this.contentRegion.show(infoLayoutView);
            this.$el.find('.navButton.active').removeClass('active');
            this.ui.navInfo.addClass('active');
        }
    });

    /* view definition for the 'Home' screen */
    module.HomeLayoutView = Marionette.LayoutView.extend({
        tagName: 'div',
        id: 'HomeLayoutView',
        className: 'contentLayout',
        template: '#template-HomeLayoutView'
    });

    /* view definition for the 'Info' screen */
    module.InfoLayoutView = Marionette.LayoutView.extend({
        tagName: 'div',
        id: 'InfoLayoutView',
        className: 'contentLayout',
        template: '#template-InfoLayoutView'
    });

    /* add initializer, which fires when the app starts */
    module.addInitializer(function () {
        var layout = new module.AppLayoutView();

        /* show the layout in the region we created at the top of this file */
        app.appRegion.show(layout);
    });
});








//MyApp.HeaderModule = {};
//
//(function (Backbone, _, $) {
//    //Model定义 
//    MyApp.HeaderModule.Model = Backbone.Model.extend({
//        defaults: {
//            'title': "地名地址检索服务平台"
//        }
//    });
//
//    //ItemView 定义 
//    MyApp.HeaderModule.View = Marionette.ItemView.extend({
//        el: '#header',
//        events: {
//            "click #ul-service": "navRoute"
//        },
//        render: function () {
//            var that = this;
//            var data = that.model.attributes;
//            var html = Marionette.TemplateCache.prototype.loadTemplate("tmplHeader", data); 
//
//            //View加载到DOM进行显示  
//            that.$el.html(html);
//        },
//        navRoute: function (event) {
//            var $btn = $(event.target);
//            var type = $btn.attr("data-type");
//            console.log("type:",type);
//            if (type === "java") {
//                
//            }else if (type === "rest") {
//                
//            }
//        }
//    }); 
//})(Backbone, _, $);
