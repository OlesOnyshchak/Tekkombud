angular.module('employee')
    .factory("SettingService",['$http', function SettingServiceFactory($http){
        return {
            create: function(reg){
                return $http.post('registration',reg).success(function(data){
                    console.log("ok");
                });
            }
        }
    }]);
