var $liveBrowserView = {
	getCachedNodeFromCacheAndSetValues : function(url) {
		var new_web_view_tab_node = $staticModels.staticDomNodesCache["new-web-view-tab-node"].cloneNode(true);
		var new_web_view_tab_content_node = $staticModels.staticDomNodesCache["new-web-view-tabcontent-node"].cloneNode(true);
		var tabID = $globals["live-browser-view"].tabs;
		new_web_view_tab_node.children[0].setAttribute("href", tabID);
		new_web_view_tab_content_node.setAttribute("id", tabID);
		new_web_view_tab_content_node.children[0].setAttribute("src", url);
		$liveBrowserView.addTitleToTab(url, new_web_view_tab_node);
		$liveBrowserView.addTabToLastInnerChild(new_web_view_tab_node);
		$liveBrowserView
				.addTabContentToLastInnerChild(new_web_view_tab_content_node);
		$generateEvents.simualteClick(new_web_view_tab_node.children[0]);
		$globals["live-browser-view"].tabs += 1;
	},
	addTabToLastInnerChild : function(node) {
		$(node).insertBefore($("#add-newtab").parent());
	},
	addTabContentToLastInnerChild : function(node) {
		$(node).insertBefore($("#new-tab"));
	},
	setTitleToPage : function(title, node) {
		node.children[0].children[0].children[0].innerHTML = title;
	},
	addTitleToTab : function(url, node) {
		$networkUtils.ajax({
			url : url,
			successCallback : function(responseHtml) {
				var title = $(responseHtml).filter('title').text();
				$liveBrowserView.setTitleToPage(title, node);
			},
			errorCallBack : function(error) {
				console.log(error);
				$view.notificationBox({
					type : "error",
					message : "cannot load URL"
				});
			}
		})
	}

}