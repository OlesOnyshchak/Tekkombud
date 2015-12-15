var module = angular.module('app', ['spring-security-csrf-token-interceptor', 'ui.router','ngMap','ui.bootstrap']);

module.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('otherwise', {
            url:'/',
            templateUrl: 'app/welcome/template/home.html'
        })
        .state('contact', {
            url:'/contact',
            templateUrl: 'app/welcome/template/contact.html',
            controller: 'WelcomeController'
        })
        .state('home', {
            url:'/home',
            templateUrl: 'app/welcome/template/home.html'
        })
        .state('project', {
            url:'/project',
            templateUrl: 'app/welcome/template/project.html'
        })
        .state('offer', {
            url:'/offer',
            templateUrl: 'app/welcome/template/offer.html'
        })
}]);
