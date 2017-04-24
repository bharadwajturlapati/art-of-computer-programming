var $genericViews = {
    loadIdNodesFromUI : function() {
	    var parentNodeModels = {

	    };
	    parentNodeModels["quickAccessBoxNode"] = $("#quick-access .flex-container")[0];
	    $genericViews.cachedParentNodes = parentNodeModels;
    },
    cachedParentNodes : undefined
}