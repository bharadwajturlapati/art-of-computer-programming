var $ts = {
    fireRegisterDOMEvents : function() {
	    //$ts.registerDropEvent();
    	$register.registerDialog();
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
		    $controller.openElectronDialog();
	    });
    },
    preinit : function() {
	    window.jQuery = window.$ = require('jquery');
    },
    init : function() {
	    $ts.fireRegisterDOMEvents();
    }
}

var $controller = {
    fileUploadController : function() {
	    $model.prepareJqueryDialogModel(null);
    },
    openElectronDialog : function(config) {
	    let dialog = require('electron').remote.dialog;
	    dialog.showOpenDialog({
		    properties : ['openFile']
	    })
	    console.log("File Upload Successful");
    }
}

var $view = {
	defaultDialog : {
		type : 'openFile'
	}
}

var $model = {
	prepareJqueryDialogModel : function(config) {
		$("#dialog").dialog("open");
		event.preventDefault();
	}
}

var $register = {
	registerDialog : function() {
		$("#dialog").dialog({
		    autoOpen : false,
		    width : 400,
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