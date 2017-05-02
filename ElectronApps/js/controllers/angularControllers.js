var $registerAngularControllers = {
	registerFIPController : function() {
		$angular.controller("fipController", function($scope) {
			$scope.records = [ "Alfreds Futterkiste", "Berglunds snabbköp",
					"Centro comercial Moctezuma", "Ernst Handel", ]
		});
	}
}