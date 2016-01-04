var module = angular.module('app', ['spring-security-csrf-token-interceptor', 'ui.router', 'ngMap', 'ui.bootstrap', 'angularUtils.directives.dirPagination', 'pascalprecht.translate']);
module.config(['$translateProvider', '$stateProvider', '$urlRouterProvider', function ($translateProvider, $stateProvider, $urlRouterProvider) {

    $translateProvider.translations('en', {
        'Home': 'Home',
        'Projects': 'Projects',
        'Offers': 'Offers',
        'Contact': 'Contact',
        'LANG': "en"
    });

    $translateProvider.translations('ukr', {
        'Home': 'Домашня',
        'Projects': 'Проекти',
        'Offers': 'Вакансії',
        'Contact': 'Контакти',
        'LANG': "укр"
    });

    $translateProvider.preferredLanguage('en');

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
