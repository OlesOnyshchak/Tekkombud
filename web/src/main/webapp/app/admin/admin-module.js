var admin = angular.module('admin',['ngRoute','spring-security-csrf-token-interceptor', 'ui.router','ui.bootstrap']);
admin.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('otherwise', {
            url:'/',
            templateUrl: 'app/admin/index.html'
        })
        .state('cv', {
            url:'/cv',
            templateUrl: 'app/admin/template/cv.html'

        })
        .state('message', {
            url:'/message',
            templateUrl: 'app/admin/template/message.html',
            controller:'MessageController'
        })
}]);