var $liveBrowserView = {
	getCachedNodeFromCacheAndSetValues : function(url) {
		$livebrowserEventHandler.getActiveWebView().removeClass();
		var new_web_view_tab_node = $staticModels.staticDomNodesCache["new-web-view-tab-node"];
		var new_web_view_tab_content_node = staticModels.staticDomNodesCache["new-web-view-tabcontent-node"];
		var tabID = $globals["live-browser-view"].tabs;
		new_web_view_tab_node.children[0].setAttribute("href", tabID);
		new_web_view_tab_content_node.setAttribute("id", tabID);
		new_web_view_tab_content_node.children[0].setAttribute("src", url);
		$liveBrowserView.addTabToLastInnerChild(new_web_view_tab_node);
		$liveBrowserView
				.addTabContentToLastInnerChild(new_web_view_tab_content_node);
		$globals["live-browser-view"].tabs += 1;
	},
	addTabToLastInnerChild : function(node) {
		$(node).insertBefore($("#add-newtab").parent());
	},
	addTabContentToLastInnerChild : function(node) {
		$(node).insertBefore($("#new-tab"));
	}

}