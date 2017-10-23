var workspaceApp = angular.module('workspaceFabric',['ngRoute']);

workspaceApp.controller('mainController', function($scope){
    $scope.message = '';
    $scope.addPlace = function(){
    	$("#popup-quickAccess").show();
    };
    $scope.addLocationtoGrid = function(){
		$("#popup-quickAccess").hide();
    };
});

workspaceApp.config(function($routeProvider) {
    $routeProvider
        // route for the home page
        .when('/', {
            templateUrl : 'partials/quick-access.html',
            controller  : 'mainController'
        });
});