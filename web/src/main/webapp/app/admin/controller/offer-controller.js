angular.module('admin')
    .controller('OfferController', ['$scope', '$http', 'SettingService', '$modal', function ($scope, $http, SettingService, $modal) {



        $scope.addOffer = function () {
            var modalInstance = $modal.open({
                animation: true,
                templateUrl: 'app/admin/template/modals/add-offer-modal.html',
                controller: 'AddOfferController',
                size: 'md'
            });
            modalInstance.result.then(function (result) {
                $scope.jobInfo = result;
                getOffers();
            });
        };
        getOffersData();

        function getOffersData() {
            SettingService.getAllOffers().then(function (data) {
                $scope.jobInfo = data;
                getOffers();
            });

        }

        function getOffers() {
            $scope.sort = function (keyname) {
                $scope.sortKey = keyname;   //set the sortKey to the param passed
                $scope.reverse = !$scope.reverse; //if true make it false and vice versa
            }
        }

        $scope.offerInfo = function (offerInfo) {
            var modalInstance = $modal.open({
                animation: true,
                templateUrl: 'app/admin/template/modals/info-offer-modal.html',
                controller: 'InfoOfferController',
                size: 'lg',
                resolve: {
                    response: function () {
                        return offerInfo;
                    }
                }
            });
            modalInstance.result.then(function (result) {

            });
        }

    }]);

