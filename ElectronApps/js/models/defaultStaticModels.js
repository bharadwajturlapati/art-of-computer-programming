var $staticModels = {
    defaultDialog : {
        autoOpen : false,
        width : 300,
    },
    healthCheckURLConfig : {
        url : "http://127.0.0.1:8000/health-check/",
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
    },
    staticDomNodesCache : undefined,
    createStaticDomNodesCache : function(){
    	$staticModels.staticDomNodesCache["new-web-view-tab-node"] = $liveBrowserModels.addTab();
    	$staticModels.staticDomNodesCache["new-web-view-tabcontent-node"] = $liveBrowserModels.addTabContent();
    }
}