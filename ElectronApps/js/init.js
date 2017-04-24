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
	    // Pre cache Parent Nodes in a global variable for the other operations to work
	    $genericViews.loadIdNodesFromUI();
	    //$view.loadSplashScreen();
	    $controller.loadAllData();
	    //$view.dismissSplash();
    }
}