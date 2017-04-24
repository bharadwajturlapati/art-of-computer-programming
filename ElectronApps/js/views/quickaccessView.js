var $quickAccessView = {
    render : function(data) {
	    console.log("quick access data" + data);
	    for (var dataNode = 0; dataNode < data.length; dataNode++) {
		    $quickAccessView.createQuickAccessGrid(data[dataNode]);
	    }
    },
    createQuickAccessGrid : function(dataNode) {
	    var gridNode = $domUtils.createDivNode({
	        id : dataNode.id,
	        "class" : "default-flex-item",
	        "meta" : "quick-access-data-node"
	    })
	    gridNode.appendChild($domUtils.createImageNode({
		    "src" : $quickAccessView.processFileUrl(dataNode.fileurl)
	    }))

	    $genericViews.cachedParentNodes.quickAccessBoxNode
	            .appendChild(gridNode);
    },
    processFileUrl : function(fileUrlInput) {
	    return fileUrlInput.replace(/\//g, "\\");
    }
}