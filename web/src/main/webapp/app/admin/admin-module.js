var admin = angular.module('admin', ['ngRoute', 'spring-security-csrf-token-interceptor', 'ui.router', 'ui.bootstrap', 'angularUtils.directives.dirPagination', 'pascalprecht.translate', 'ngCookies']);
admin.config(['$translateProvider', '$stateProvider', '$urlRouterProvider', function ($translateProvider, $stateProvider, $urlRouterProvider) {

    $translateProvider.useStaticFilesLoader({
        prefix: 'app/assets/i18n/welcome-',
        suffix: '.json'
    });

    $translateProvider.useLocalStorage();
    $translateProvider
        .useSanitizeValueStrategy('escaped');
    $translateProvider.preferredLanguage('eng');

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('otherwise', {
            url:'/',
            templateUrl: 'app/admin/index.html'
        })
        .state('message', {
            url:'/message',
            templateUrl: 'app/admin/template/message.html',
            controller:'MessageController'
        })
        .state('offer', {
            url:'/offer',
            templateUrl: 'app/admin/template/offer.html',
            controller:'OfferController'
        })
}]);