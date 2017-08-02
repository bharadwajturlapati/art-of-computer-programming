var $apiEventHandler = {
	send : function(value) {
		var urlconfig = {
			url : value,
			successCallback : function(data) {
				// Need to be Done on the instantiation of the api tab
				// Refactor this code after implenting the models
				var jsonFormatter = $nodeRequire.json_format();
				CodeMirror($("#api-response").get(0), {
					value : jsonFormatter(data),
					matchBrackets : true,
					autoCloseBrackets : true,
					mode : "application/ld+json",
					lineWrapping : true,
					lineNumbers : true
				});
			},
			requestType : "get",
			contentType : "application/json"
		}
		$networkUtils.ajax(urlconfig);
	}
}