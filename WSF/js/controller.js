var workspaceApp = angular.module('workspaceFabric',['ngRoute']);

workspaceApp.controller('mainController', function($scope){
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
    $scope.initTabs = function(){
    	initTabs();
    };
});

workspaceApp.config(function($routeProvider) {
    $routeProvider
        // SPA router configurations
        .when('/', {
            templateUrl : 'partials/quick-access.html',
            controller  : 'mainController'
        })
        .when('/api-docgen', {
            templateUrl : 'partials/api-docgen.html',
            controller  : 'mainController'
        })
        .when('/path-vars', {
            templateUrl : 'partials/path-vars.html',
            controller  : 'mainController'
        })
        .when('/credits', {
            templateUrl : 'partials/credits.html',
            controller  : 'mainController'
        })
        .when('/formatter', {
            templateUrl : 'partials/formatter.html',
            controller  : 'mainController'
        });
});