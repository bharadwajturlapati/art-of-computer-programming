var $quickAccessDC = {
	loadData : function() {
		$networkUtils.ajaxPost(localmodels.loaddata_urlconfig);
	},
	data:undefined
}

var localmodels = {
	loaddata_urlconfig : {
	    url : "http://127.0.0.1:8000/api/quickaccess/",
	    successCallback : function(data) {
	    	$quickAccessDC.data = data;
	    	// On success call back render the response 
	    	$quickAccessView.render($quickAccessDC.data);
	    },
	    contentType : 'application/json; charset=utf-8',
	    errorCallBack : function() {
		    console.log("Failed to get quick access api");
		    $view.notificationBox({
		        type : "error",
		        message : "Failed to get quick access api"
		    });
	    }
	}
}