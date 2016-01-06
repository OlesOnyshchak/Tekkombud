angular
    .module('app')
    .controller('ModalWelcomeController', ['$scope','response','WelcomeService','$modalInstance',function ($scope, response,WelcomeService,$modalInstance) {
            $scope.info = response;

            $scope.cancel = function () {
                $modalInstance.close();
            };

            $scope.submit = function () {
                WelcomeService.saveMessage($scope.info);
                $modalInstance.close("submit");
            };
        }]);