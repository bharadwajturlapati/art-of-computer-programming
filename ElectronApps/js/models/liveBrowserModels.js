var $liveBrowserModels = {
	addTab : function() {
		// cache this node in the global variable and apply the properies in the
		// run time
		var liNode = $domUtils.createLiNode({
			"class" : "active"
		});
		var anchorNode = $domUtils.createAnchorNode({
			"data-toggle" : "tab",
			"href" : 3
		});
		var divWrapperNode = $domUtils.createDivNode({
			"id" : "tab-content"
		});
		var divTitleNode = $domUtils.createDivNode({
			"id" : "page-title"
		});
		liNode.appendChild(anchorNode.appendChild(divWrapperNode
				.appendChild(divTitleNode)));
		return liNode;
	},
	addTabContent : function() {
		var divWrapperNode = $domUtils.createDivNode({
			"id" : "fill-in-run-time",
			"class" : "tab-pane fade in active"
		});

		var webViewNode = $domUtils.createWebViewNode({
			"id" : "web-view",
			"src" : "fill-in-run-time",
			"style" : "width: 100%;height: calc(100vw - 100px);"
		});
		divWrapperNode.appendChild(webViewNode);
		return divWrapperNode;
	}
}