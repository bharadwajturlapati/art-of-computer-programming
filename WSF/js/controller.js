var workspaceApp = angular.module('workspaceFabric',['ngRoute']);

workspaceApp.controller('mainController', function($scope){
    $scope.message = '';
});

workspaceApp.config(function($routeProvider) {
    $routeProvider
        // route for the home page
        .when('/', {
            templateUrl : 'partials/quick-access.html',
            controller  : 'mainController'
        });
});