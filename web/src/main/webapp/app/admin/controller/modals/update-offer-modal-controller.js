angular
    .module('admin')
    .controller('UpdateOfferController', ['$scope', 'response', 'SettingService', '$modalInstance', function ($scope, response, SettingService, $modalInstance) {

        $scope.info = response;

        $scope.NAME_REGEX = /^[a-zA-Z а-яА-Я]*$/;
        $scope.TEXT_REGEX = /^[a-zA-Z?!"',. -()а-яА-Я]*$/;

        $scope.submit = function (info) {
            SettingService.updateOffer(info).then(function () {
                $modalInstance.close();
            });
        };

        $scope.cancel = function () {
            $modalInstance.close();
        };
    }]);
