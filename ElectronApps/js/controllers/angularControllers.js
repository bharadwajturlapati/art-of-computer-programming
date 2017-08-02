var $registerAngularControllers = {
	registerFIPController : function() {
		$angular.controller("fipController", function($scope) {
			let shell = require('shelljs');
			var data = [];
			var child = shell.exec('path', {
				async : true
			});
			child.stdout.on('data', function(data) {
				// Stripping path=
				data = data.substr(5, data.length);
				$scope.systempaths = $registerAngularControllers.clean(data
						.split(';'));
				$scope.$digest();
			});
		});
	},
	clean : function(array) {
		var i = 0;
		var j = 0;
		var len = array.length;
		var resultArray = new Array();
		for (i = 0; i < len; i++) {
			var data = {};
			var path = array[i]
			if (path.length > 2) {
				data.id = j;
				data.path = path;
				resultArray.push(data);
				j++;
			}
		}
		return resultArray;
	}
}