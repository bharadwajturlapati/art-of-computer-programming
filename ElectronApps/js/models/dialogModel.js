var $dialogModel = {
	registerDialog : function(dialogConfig) {
		$("#dialog").dialog({
		    autoOpen : dialogConfig.autoOpen,
		    width : dialogConfig.width
		});
	}
}