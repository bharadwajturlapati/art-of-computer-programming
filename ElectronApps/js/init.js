var $ts = {
    fireRegisterDOMEvents : function() {
	    $ts.registerDropEvent();
	    $ts.buttonUploadEvent();
    },
    registerDropEvent : function() {
	    $("#dropable-template-box").on("drop", function(event) {
		    event.preventDefault();
		    console.log("file dropped");
	    });
    },
    buttonUploadEvent : function() {
	    $("#upload-screenshot").on("click", function(event) {
		    let dialog = require('electron').dialog;
		    dialog.showOpenDialog({
			    properties : ['openFile', 'openDirectory', 'multiSelections']
		    })
		    console.log("File Upload Successful");
	    });
    },
    preinit : function() {
	    window.jQuery = window.$ = require('jquery');
    },
    init : function() {
	    $ts.fireRegisterDOMEvents();
    }
}