var module = angular.module('app', ['spring-security-csrf-token-interceptor', 'ui.router']);

module.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('otherwise', {
            url:'/',
            templateUrl: 'app/welcome/template/home.html'
        })
        .state('contact', {
            url:'/contact',
            templateUrl: 'app/welcome/template/contact.html'
        })
        .state('home', {
            url:'/home',
            templateUrl: 'app/welcome/template/home.html'
        })
        .state('project', {
            url:'/project',
            templateUrl: 'app/welcome/template/project.html'
        })
}]);
