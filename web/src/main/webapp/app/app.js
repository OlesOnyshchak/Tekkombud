angular.module('app',['ngRoute','spring-security-csrf-token-interceptor','ui.router']).config(  ['$stateProvider',function($stateProvider){
            $stateProvider
                .state('home', {
                    url: '/home',
                    template: 'app/welcome/template/home.html'
                })
                .state('contact', {
                    url: '/contact',
                    template: 'app/welcome/template/contact.html'
                });

        }]);
