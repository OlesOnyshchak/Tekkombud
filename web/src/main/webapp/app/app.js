var module = angular.module('app', ['spring-security-csrf-token-interceptor', 'ui.router', 'ngMap', 'ui.bootstrap', 'angularUtils.directives.dirPagination', 'pascalprecht.translate']);
module.config(['$translateProvider', '$stateProvider', '$urlRouterProvider', function ($translateProvider, $stateProvider, $urlRouterProvider) {

    $translateProvider.useStaticFilesLoader({
        prefix: 'app/assets/i18n/welcome-',
        suffix: '.json'
    });

    $translateProvider.preferredLanguage('eng');

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
            templateUrl: 'app/welcome/template/project.html',
            controller: 'WelcomeController'
        })
        .state('offer', {
            url:'/offer',
            templateUrl: 'app/welcome/template/offer.html',
            controller: 'WelcomeController'
        })
}]);
