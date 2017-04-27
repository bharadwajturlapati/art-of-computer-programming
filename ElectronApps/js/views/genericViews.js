var $genericViews = {
    loadIdNodesFromUI : function() {
	    var parentNodeModels = {

	    };
	    $genericViews.cachedParentNodes["quickAccessBoxNode"] = $("#quick-access .flex-container")[0];
	    $genericViews.cachedParentNodes = parentNodeModels;
    },
    cachedParentNodes : undefined
}
