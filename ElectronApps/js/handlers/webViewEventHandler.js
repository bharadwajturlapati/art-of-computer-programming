var $webViewEventHandler = {
	registerDomReadyEvent : function(webviewNode) {
		webviewNode.addEventListener('dom-ready', function() {
			var hrefNode = $webViewEventHandler
					.fetchTabHrefFromTabId(parentNode.id);
			var tabcontentNode = $webViewEventHandler
					.getTabContentNode(hrefNode);
			$webViewEventHandler.setTabPageTitie(webviewNode.getTitle());
			$webViewEventHandler.dismissProgressIndicator(tabcontentNode);
		});
	},
	fetchTabHrefFromTabId : function(nodeId) {
		return $("#web-container").find("a[href='#" + nodeId + "']")[0];
	},
	getTabContentNode : function(hrefNode) {
		return $(hrefNode).find("div[id='tab-content']")[0];
	},
	setTabPageTitie : function(pageTitle, tabContentNode) {
		$(tabContentNode).find("div[id='page-title']")[0].innerHTML = pageTitle;
	},
	dismissProgressIndicator : function(tabcontentNode) {
		var imageNode = tabcontentNode.getElementsByTagName("IMG")[0];
		imageNode.width = 0;
		imageNode.height = 0;
	},
	handleFullWebView : function(event) {
		// event.pageY > 0 to restric the content coming from top 
		if ($("#live-browser-li")[0].getAttribute("class") == "active" && event.pageY >5) {
			console.log("comes from the bottom");
		}
	}
}