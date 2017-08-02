var $livebrowserEventHandler = {
	loadURL : function(url) {
		if ($("#add-newtab").parent().attr("class") == "active") {
			$liveBrowserView.getCachedNodeFromCacheAndSetValues(url);
		} else {
			var activeHrefAsDivId = $("#web-container li.active a")
					.attr("href");
			id = $livebrowserEventHandler.processID(activeHrefAsDivId);
			$(activeHrefAsDivId).children().attr("src", url);
		}
	},
	getActiveWebView : function() {
		return $("#web-container li.active");
	},
	setDisplayNone : function() {
		$("#workspaceenhancer-Logo").removeClass();
		$("#workspaceenhancer-Logo").addClass("hide-workspaceenhancer-Logo");
		$("#main-nav-tabs").removeClass();
		$("#main-nav-tabs").addClass("nav nav-tabs hide-main-nav-tabs");
	},
	processID : function(id) {
		if (!id.startsWith("#")) {
			return "#" + id;
		}
	}
}