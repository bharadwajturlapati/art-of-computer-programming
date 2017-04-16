var $model = {
    prepareJqueryDialogModel : function(config) {
	    $("#dialog").dialog("open");
	    event.preventDefault();
    },
    uploadConfig : {
	    callback : function(paths) {
		    $networkUtils.ajaxPost({
		        url : "http://127.0.0.1:8000/api/quickaccess/",
		        requestType : "post",
		        data : {
		            "fileurl" : paths[0],
		            "nickname" : $("#pic-name").val(),
		            "logicalgroup" : $("#pic-group").val()
		        },
		        successCallback : function() {
			        console.log("Health Check Success");
		        },
		        contentType : 'application/json; charset=utf-8',
		        errorCallBack : function(XMLHttpRequest, textStatus,
		                                 errorThrown) {
			        console.log("errorThrown" + errorThrown);
			        $view.notificationBox({
			            type : "error",
			            message : "Error from Backend"
			        });
		        }
		    });
	    }
    }
}