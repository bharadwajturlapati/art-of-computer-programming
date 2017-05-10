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
		appModelInit();
		// Pre cache Parent Nodes in a global variable for the other operations
		// to work
		$genericViews.loadIdNodesFromUI();
		$staticModels.createStaticDomNodesCache();
		// $view.loadSplashScreen();
		$controller.loadAllData();
		$view.dismissSplash();
	},
	registerAngularAll : function() {
		$registerAngularControllers.registerFIPController();
	},
	registerGlobalNameSpace : function(){
		if(typeof $wsf == "undefined"){
			$wsf = {
				ui : {
					
				}	
			}
		}
	}
}
function defineGetter(obj, prop, get) {
	if (Object.defineProperty) {
		return Object.defineProperty(obj, prop, accessorDescriptor("get", get));
	}
	if (Object.prototype.__defineGetter__) {
		return obj.__defineGetter__(prop, get);
	}
}

function defineSetter(obj, prop, set) {
	if (Object.defineProperty) {
		return Object.defineProperty(obj, prop, accessorDescriptor("set", set));
	}
	if (Object.prototype.__defineSetter__) {
		return obj.__defineSetter__(prop, set);
	}
}
function accessorDescriptor(field, fun) {
	var desc = {
		enumerable : true,
		configurable : true
	};
	desc[field] = fun;
	return desc;
}