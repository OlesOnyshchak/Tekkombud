var module = angular.module('app', ['spring-security-csrf-token-interceptor', 'ui.router', 'ngMap', 'ui.bootstrap', 'angularUtils.directives.dirPagination', 'pascalprecht.translate']);
module.config(['$translateProvider', '$stateProvider', '$urlRouterProvider', function ($translateProvider, $stateProvider, $urlRouterProvider) {

    $translateProvider.useStaticFilesLoader({
        prefix: 'app/assets/i18n/welcome-',
        suffix: '.json'
    });

    $translateProvider.preferredLanguage('ukr');

    /*$translateProvider.translations('en', {
        'Home': 'Home',
        'Projects': 'Projects',
        'Offers': 'Offers',
        'Contact': 'Contact',
     'lang': "en",
     'Tekkombud': "Tekkombud",
     'Sign in':"Sign in",
     'username':"username",
     'password':"password",
     'Our offers':"Our offers",
     'Id':"Id",
     'Name':"Name",
     'Description':"Description",
     'Skills':"Skills",
     'Salary':"Salary",
     'Manipulation':"Manipulation"


     });

    $translateProvider.translations('ukr', {
        'Home': 'Домашня',
        'Projects': 'Проекти',
        'Offers': 'Вакансії',
        'Contact': 'Контакти',
     'lang': "укр",
     'Tekkombud': "Теккомбуд",
     'Sign in':"Увійти",
     'username':"логін",
     'password':"пароль",
     'Our offers':"Наші вакансії",
     'Id':"Порядковий номер",
     'Name':"Ім'я",
     'Description':"Опис",
     'Skills':"Навички",
     'Salary':"Зарплата",
     'Manipulation':"Дії"
    });

     $translateProvider.preferredLanguage('en');*/

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
