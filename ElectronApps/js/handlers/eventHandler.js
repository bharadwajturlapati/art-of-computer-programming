$registerEvents = {
	initEvents : function() {
		$dialogModel.registerDialog($staticModels.defaultDialog);
		$registerEvents.addButtonEvents();
		$registerEvents.addDivEvents();
		$registerEvents.addTabEvents();
		$registerEvents.addPanelEvents();
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
	},
	addPanelEvents : function() {
		/* Minimize */
		$(".panel-tools .minimise-tool").click(function(event) {
			$(this).parents(".panel").find(".panel-body").slideToggle(100);
			return false;
		});
		/* Close */
		$(".panel-tools .closed-tool").click(function(event) {
			$(this).parents(".panel").fadeToggle(400);
			return false;
		});
		/* Search */
		$(".panel-tools .search-tool").click(function(event) {
			$(this).parents(".panel").find(".panel-search").toggle(100);
			return false;
		});
		/* expand */
		$('.panel-tools .expand-tool').on('click', function() {
			if ($(this).parents(".panel").hasClass('panel-fullsize')) {
				$(this).parents(".panel").removeClass('panel-fullsize');
			} else {
				$(this).parents(".panel").addClass('panel-fullsize');

			}
		});
	}
}