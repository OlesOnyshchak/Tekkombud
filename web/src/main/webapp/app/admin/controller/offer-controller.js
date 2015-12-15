angular.module('admin')
    .controller('OfferController', ['$scope', '$http', 'SettingService', '$modal', function ($scope, $http, SettingService, $modal) {
        $scope.jobInformation = {};

        $scope.saveMessage = function (info) {
            var modalInstance = $modal.open({
                animation: true,
                templateUrl: 'app/admin/template/modals/confirm-message.html',
                controller: 'ModalWelcomeController',
                size: 'md',
                resolve: {
                    response: function () {
                        return info;
                    }
                }
            });

            modalInstance.result.then(function (result) {
                if (result === "submit"){
                    $scope.message = {};
                }
            })
        };
    }]);

