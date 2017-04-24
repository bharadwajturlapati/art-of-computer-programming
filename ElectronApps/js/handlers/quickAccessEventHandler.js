var $quickAccessEventHandler = {
	openInExplorer : function(event) {
		if (event.target.parentNode.getAttribute("meta") == "quick-access-data-node"
		        && event.target.tagName == "IMG") {
			let shell = require("electron").remote.shell;
			shell.showItemInFolder(event.target.src);
		}
	}
}