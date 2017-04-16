$registerEvents = {
    initEvents : function() {
	    // $registerEvents.registerDropEvent();
	    $dialogModel.registerDialog($staticModels.defaultDialog);
	    $registerEvents.addButtonEvents();
    },
    addButtonEvents : function() {
	    $("#upload-screenshot").on("click", function(event) {
		    $controller.fileUploadController();
	    });
	    $("#open-electron-dialog").on("click", function(event) {
		    $controller.openElectronDialog($model.uploadConfig);
	    });
    },
    registerDropEvent : function() {
	    $("#dropable-template-box").on("drop", function(event) {
		    event.preventDefault();
		    console.log("file dropped");
	    });
    },
}