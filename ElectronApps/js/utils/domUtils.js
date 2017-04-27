var $domUtils = {
	createDivNode : function(config) {
		return $("<div>", config)[0];
	},
	createImageNode : function(config) {
		return $("<img>", config)[0];
	},
	createLiNode : function(config) {
		return $("<li>", config)[0];
	},
	createAnchorNode : function(config) {
		return $("<a>", config)[0];
	},
	createWebViewNode : function(config) {
		return $("<web-view>", config)[0];
	}
}