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
                    getOffers();
                }
            });
            getOffers();
        };

        $scope.clearMessage = function () {
            $scope.jobInformation = {};
        };

        function getOffers() {
            SettingService.getAllOffers().then(function (data) {
                $scope.jobInfo = data;

            });

            $scope.sort = function(keyname){
                $scope.sortKey = keyname;   //set the sortKey to the param passed
                $scope.reverse = !$scope.reverse; //if true make it false and vice versa
            }
        }
        getOffers();
    }]);

