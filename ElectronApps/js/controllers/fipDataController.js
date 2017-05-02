var $fipDC = {
	loadData : function() {
		let shell = require('shelljs');
		var data = [];
		var child =shell.exec('path', {async:true});
		child.stdout.on('data', function(data) {
			// Stripping path=
			data = data.substr(4,data.length);
			$fipDC.data = data.split(';')
			$angular.controller("fipController", function($scope) {
				$scope.records = $fipDC.data;
				$scope.$digest();
			});
		});
	},
	data :[]
}