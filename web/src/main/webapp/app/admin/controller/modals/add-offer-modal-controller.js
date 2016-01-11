angular
    .module('admin')
    .controller('AddOfferController', ['$scope','SettingService','$modalInstance',function ($scope,SettingService,$modalInstance) {

        $scope.jobInformation = {};

        $scope.cancel = function () {
            $modalInstance.close();
        };

        $scope.NAME_REGEX = /^[a-zA-Z а-яА-Я]*$/;
        $scope.TEXT_REGEX = /^[a-zA-Z а-яА-Я,.:?!"'єі0-9-]*$/;

        $scope.submit = function (info) {
            SettingService.saveOffer(info).then(function () {
                $modalInstance.close();
            });
        };
    }]);
