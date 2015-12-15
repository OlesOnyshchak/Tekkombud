angular.module('admin')
    .factory("SettingService", ['$http', function SettingServiceFactory($http) {
        return {
            create: function (reg) {
                return $http.post('registration', reg).success(function (data) {
                    console.log("ok");
                });
            },
            getAll: function () {
                return $http.get('messages').then(function (response) {
                    return response.data;
                });
            },
            deleteMessageById:function(id){
                return $http.delete('delete-message/'+ id).then(function (response) {
                    console.log("ok");
                });
            }
        }
    }]);