$registerEvents = {
	initEvents : function() {
		$dialogModel.registerDialog($staticModels.defaultDialog);
		$registerEvents.addButtonEvents();
		$registerEvents.addDivEvents();
		$registerEvents.addTabEvents();
	},
	addButtonEvents : function() {
		$("#upload-screenshot").on("click", function(event) {
			$controller.fileUploadController();
		});
		$("#open-electron-dialog").on("click", function(event) {
			$controller.openElectronDialog($model.uploadConfig);
		});
		$("#change-url").on("click", function(event) {
			$livebrowserEventHandler.loadURL($("#live-browser-url").val());
		});
		$("#go-home").on("click", function(event) {
			$livebrowserEventHandler.loadURL("https://www.google.com");
		});
	},
	addTabEvents : function() {
		$("#live-browser-li").on("click", function(event) {
			$livebrowserEventHandler.setDisplayNone();
		});
	},
	addDivEvents : function() {
		$("#quickaccess-flex-box").on("click", function(event) {
			$quickAccessEventHandler.openInExplorer(event);
		});
	}
}