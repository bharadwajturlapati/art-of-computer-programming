var $networkUtils = {
	ajax : function(urlconfig) {
		$.ajax({
		    url : urlconfig.url,
		    success : urlconfig.successCallback,
		    type : urlconfig.requestType,
		    headers : urlconfig.requestHeaders,
		    contentType: urlconfig.contentType,
		    error : urlconfig.errorCallBack
		});
	},
	binaryajax : function(binaryconfig){
		
	}
}