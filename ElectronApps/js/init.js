var $ts = {
    preinit : function() {
	    // Register Jquery
	    window.jQuery = window.$ = require('jquery');
    },
    isServerHealthy : function() {
	    $networkUtils.ajax($staticModels.healthCheckURLConfig);
    },
    init : function() {
	    $ts.isServerHealthy();
	    $registerEvents.initEvents();
	    $view.loadSplashScreen();
	    $controller.loadAllData();
	    $view.dismissSplash();
    }
}