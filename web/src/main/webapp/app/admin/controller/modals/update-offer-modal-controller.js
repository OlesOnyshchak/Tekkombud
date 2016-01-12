angular
    .module('admin')
    .controller('UpdateOfferController', ['$scope', 'response', 'SettingService', '$modalInstance', function ($scope, response, SettingService, $modalInstance) {


        $scope.info = response;
        $scope.NAME_REGEX = /^[a-zA-Z а-яА-Я]*$/;
        $scope.TEXT_REGEX = /^[a-zA-Z?!"',. -()а-яА-Я0-9]*$/;

        $scope.submit = function (info) {
            console.log(info);
            $scope.$broadcast('show-errors-check-validity');
            if ($scope.updateModal.$valid) {
                SettingService.updateOffer(info).then(function () {
                    $modalInstance.close();
                });
            }
        };

        $scope.orderOptions = [
            {"name": "ACTIVE", "value": "ACTIVE"},
            {"name": "RESPONDED", "value": "RESPONDED"},
            {"name": "CLOSED", "value": "CLOSED"}
        ];

        $scope.orderModel = getCorrectStatus();

        function getCorrectStatus() {
            if (response.offerStatus == $scope.orderOptions[0].name) {
                return $scope.orderOptions[0];
            }
            else if (response.offerStatus == $scope.orderOptions[1].name) {
                return $scope.orderOptions[1];
            }
            else {
                return $scope.orderOptions[2];
            }
        }

        $scope.changeStatus = function (status) {
            $scope.info.offerStatus = status.name;
        };

        $scope.cancel = function () {
            $modalInstance.close();
        };
    }]);
