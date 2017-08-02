var $controller = {
	fileUploadController : function() {
		$model.prepareJqueryDialogModel(null);
	},
	openElectronDialog : function(config) {
		let dialog = require('electron').remote.dialog;
		dialog.showOpenDialog({
			properties : [ 'openFile' ]
		}, config.callback);
	},
	loadAllData : function(config) {
		$quickAccessDC.loadData();
	}
}