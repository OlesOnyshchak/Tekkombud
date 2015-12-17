angular.module('admin')
    .factory("SettingService", ['$http', function SettingServiceFactory($http) {
        return {
            create: function (reg) {
                return $http.post('registration', reg).success(function (data) {
                });
            },
            getAll: function () {
                return $http.get('messages').then(function (response) {
                    return response.data;
                });
            },
            deleteMessageById:function(id){
                return $http.delete('delete-message/'+ id).then(function (response) {
                });
            },
            saveOffer: function (offer) {
                return $http.post('add-offer', offer).success(function (data) {
                });
            },
            getAllOffers: function () {
                return $http.get('offers').then(function (response) {
                    return response.data;
                });
            }
        }
    }]);