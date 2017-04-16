var $model = {
    prepareJqueryDialogModel : function(config) {
	    $("#dialog").dialog("open");
	    event.preventDefault();
    },
    uploadConfig : {
	    callback : function(paths) {
		    $networkUtils.binaryajax({
		        url : "http://127.0.0.1:8000/api/quickaccess",
		        type : post,
		        data : {path:paths[0], name:$("#pic-name").value, group:$("#pic-group")},
		        successCallback : function() {
			        console.log("Health Check Success");
		        },
		        contentType : 'application/json; charset=utf-8',
		        errorCallBack : function() {
			        console.log("Health Check Failure");
			        $view.notificationBox({
			            type : "error",
			            message : "BackendServer not ready"
			        });
		        }
		    });
	    }
    }
}