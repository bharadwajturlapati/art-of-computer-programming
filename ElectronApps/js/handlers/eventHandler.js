$registerEvents = {
    initEvents : function() {
	    // $registerEvents.registerDropEvent();
	    $dialogModel.registerDialog($staticModels.defaultDialog);
	    $registerEvents.addButtonEvents();
	    $registerEvents.addDivEvents();
	    //$registerEvents.addWebViewEvents();
    },
    addButtonEvents : function() {
	    $("#upload-screenshot").on("click", function(event) {
		    $controller.fileUploadController();
	    });
	    $("#open-electron-dialog").on("click", function(event) {
		    //$controller.openElectronDialog($model.uploadConfig);
	    	$controller.c
	    });
	    $("#change-url").on("click", function(event) {
	    	$livebrowserEventHandler.loadURL($("#live-browser-url").val());
	    });
	    $("#go-home").on("click", function(event) {
	    	$livebrowserEventHandler.loadURL("https://www.google.com");
	    });
	    $("#live-browser-li").on("click", function(event) {
	    	$livebrowserEventHandler.setDisplayNone();
	    });
    },
    addDivEvents : function() {
	    $("#quickaccess-flex-box").on("click", function(event) {
		    $quickAccessEventHandler.openInExplorer(event);
	    });
	    /* Kept in comments for any further usage
	     * $("#top-of-screen").on("mouseover", function(event) {
	    	$webViewEventHandler.handleFullWebView(event);
	    });*/
    },
    registerDropEvent : function() {
	    $("#dropable-template-box").on("drop", function(event) {
		    event.preventDefault();
		    console.log("file dropped");
	    });
    },
    addWebViewEvents : function(){
    	
    }
}