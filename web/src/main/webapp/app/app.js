var module = angular.module('app', [
    'spring-security-csrf-token-interceptor',
    'ui.router',
    'ngMap',
    'ui.bootstrap',
    'angularUtils.directives.dirPagination',
    'pascalprecht.translate',
    'ngCookies',
    'ui.bootstrap.showErrors'
]);
module.config(['$translateProvider',
    '$stateProvider',
    '$urlRouterProvider',
    'showErrorsConfigProvider',
    function ($translateProvider, $stateProvider, $urlRouterProvider, showErrorsConfigProvider) {

    showErrorsConfigProvider.showSuccess(true);

        $translateProvider.useStaticFilesLoader({
        prefix: 'app/assets/i18n/welcome-',
        suffix: '.json'
    });

    $translateProvider.preferredLanguage('eng');
    $translateProvider.useLocalStorage();
    $translateProvider
        .useSanitizeValueStrategy('escaped');

        $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('otherwise', {
            url: '/home',
            templateUrl: 'app/welcome/template/home.html',
            controller: 'HomeController'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'app/welcome/template/contact.html',
            controller: 'WelcomeController'
        })
        .state('home', {
            url: '/home',
            templateUrl: 'app/welcome/template/home.html',
            controller: 'HomeController'
        })
        .state('project', {
            url: '/project',
            templateUrl: 'app/welcome/template/project.html',
            controller: 'WelcomeController'
        })
        .state('offer', {
            url: '/offer',
            templateUrl: 'app/welcome/template/offer.html',
            controller: 'WelcomeController'
        })
}]);
