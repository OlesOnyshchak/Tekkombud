angular.module('app')
    .factory("WelcomeService", ['$http', function WelcomeServiceFactory($http) {
        return {
            create: function (reg) {
                return $http.post('registration', reg).success(function (data) {
                    console.log("ok");
                });
            },
            saveMessage: function (reg) {
                return $http.post('message', reg).success(function (data) {
                    console.log("ok");
                });
            }
        }
    }]);