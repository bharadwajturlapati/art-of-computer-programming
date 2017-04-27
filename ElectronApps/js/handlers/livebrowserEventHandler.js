var $livebrowserEventHandler = {
	loadURL : function(url) {
		if ($livebrowserEventHandler.getActiveWebView().find("a")[0].id == "add-newtab") {

		}
		$("#web-view")[0].src = url;
	},
	getActiveWebView : function() {
		return $($livebrowserEventHandler.getWebContainer()).find("li.active")[0];
	},
	getWebContainer : function() {
		return $("#web-container")[0];
	},
	setDisplayNone : function() {
		$("#workspaceenhancer-Logo").removeClass();
		$("#workspaceenhancer-Logo").addClass("hide-workspaceenhancer-Logo");
		$("#main-nav-tabs").removeClass();
		$("#main-nav-tabs").addClass("nav nav-tabs hide-main-nav-tabs");
	}
}