angular.module('app')
    .factory("WelcomeService", ['$http', function WelcomeServiceFactory($http) {
        return {
            create: function (reg) {
                return $http.post('registration', reg).success(function (data) {
                    console.log("ok");
                });
            },
            saveMessage: function (reg) {
                return $http.post('message', reg).then(function (response) {
                    return response.data;
                });
            },
            getAllOffers: function () {
                return $http.get('offers-welcome').then(function (response) {
                    return response.data;
                });
            },
            update: function (reg, url) {
                return $http.put(url, reg).success(function (data) {
                    console.log("ok");
                });
            }
        }
    }]);