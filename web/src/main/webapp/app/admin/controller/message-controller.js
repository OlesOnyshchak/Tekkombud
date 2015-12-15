angular.module('admin')
    .controller('MessageController', ['$scope', '$http', 'SettingService','$modal', function ($scope, $http, SettingService,$modal) {
        function getMessages() {
            SettingService.getAll().then(function (data) {
                $scope.messages = data;

            });

            $scope.sort = function(keyname){
                $scope.sortKey = keyname;   //set the sortKey to the param passed
                $scope.reverse = !$scope.reverse; //if true make it false and vice versa
            }
        }
        getMessages();
        $scope.delete = function(id){
            var modalInstance = $modal.open({
                animation: true,
                templateUrl: 'app/admin/template/modals/confirm-modal.html',
                controller: 'ModalMessageController',
                size: 'md',
                resolve: {
                    response: function () {
                        return id;
                    }
                }
            });

            modalInstance.result.then(function (result) {
                console.log(result);
                if (result === "submit"){
                    getMessages();
                }
            });
        };

        $scope.info = function(information){
            var modalInstance = $modal.open({
                animation: true,
                templateUrl: 'app/admin/template/modals/information-modal.html',
                controller: 'InfoMessageController',
                size: 'md',
                resolve: {
                    response: function () {
                        return information;
                    }
                }
            });
        }
    }]);
