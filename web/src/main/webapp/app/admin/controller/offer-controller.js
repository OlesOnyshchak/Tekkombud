angular.module('admin')
    .controller('OfferController', ['$scope', '$http', 'SettingService', '$modal', function ($scope, $http, SettingService, $modal) {
        $scope.jobInformation = {};

        $scope.saveOffer = function (info) {
            var modalInstance = $modal.open({
                animation: true,
                templateUrl: 'app/admin/template/modals/add-offer-modal.html',
                controller: 'AddOfferController',
                size: 'md',
                resolve: {
                    response: function () {
                        return info;
                    }
                }
            });

            modalInstance.result.then(function (result) {
                if (result === "submit"){
                    $scope.jobInformation = {};
                }
            })
        };
        $scope.clearMessage = function () {
            $scope.jobInformation = {};
        }
    }]);

