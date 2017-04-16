var $ts = {
    fireRegisterDOMEvents : function() {
	    // $ts.registerDropEvent();
	    $register.registerDialog($staticModels.defaultDialog);
	    $ts.addButtonEvents();
    },
    registerDropEvent : function() {
	    $("#dropable-template-box").on("drop", function(event) {
		    event.preventDefault();
		    console.log("file dropped");
	    });
    },
    addButtonEvents : function() {
	    $("#upload-screenshot").on("click", function(event) {
		    $controller.fileUploadController();
	    });
	    $("#open-electron-dialog").on("click", function(event) {
		    $controller.openElectronDialog($model.uploadConfig);
	    });
    },
    preinit : function() {
	    // Register Jquery
	    window.jQuery = window.$ = require('jquery');
    },
    isServerHealthy : function() {
	    $networkUtils.ajax($staticModels.healthCheckURLConfig);
    },
    init : function() {
    	$ts.isServerHealthy();
	    $ts.fireRegisterDOMEvents();
    }
}
var $register = {
	registerDialog : function(dialogConfig) {
		$("#dialog").dialog({
		    autoOpen : dialogConfig.autoOpen,
		    width : dialogConfig.width,
		    buttons : [{
		        text : "Ok",
		        click : function() {
			        $(this).dialog("close");
		        }
		    }, {
		        text : "Cancel",
		        click : function() {
			        $(this).dialog("close");
		        }
		    }]
		});
	}
}
