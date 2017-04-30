var $view = {
	defaultDialog : {
		type : 'openFile'
	},
	notificationBox : function(config) {
		switch (config.type) {
		case "success":
			break;
		case "error":
			$.notify(config.message, config.type);
			break;
		case "warning":
			break;
		case "info":
			break;
		}
	},
	dismissSplash : function() {
		$(".loading").delay(3000).fadeOut(700);
	}
}