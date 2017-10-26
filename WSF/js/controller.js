var workspaceApp = angular.module('workspaceFabric',['ngRoute']);

workspaceApp.controller('mainController', function($scope){
    $scope.message = '';
    $scope.addPlace = function(){
    	$("#popup-quickAccess").show();
    };
    $scope.addLocationtoGrid = function(){
    	var inputpath = $("#input-path").val();
    	var locaname = $("#loca-name").val();
    	addLocationToDB(inputpath, locaname);
		$("#popup-quickAccess").hide();
    };
    $scope.closeDialog = function(){
    	$("#popup-quickAccess").hide();
    };
    $scope.initAddQuickAccessTab = function(){
    	initAddQuickAccessTab();
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