angular
    .module('app')
    .controller('ModalWelcomeController', ['$scope','response','WelcomeService','$modalInstance',function ($scope, response,WelcomeService,$modalInstance) {
            $scope.info = response;

            $scope.cancel = function () {
                $modalInstance.close();
            };

            $scope.submit = function () {
                console.log("arrived");
                $scope.$broadcast('show-errors-check-validity');
                if ($scope.contactMessage.$valid) {
                    WelcomeService.saveMessage($scope.info).then(function () {
                        $scope.$broadcast('show-errors-reset');
                        $scope.info = null;
                        $modalInstance.close("submit");
                    });
                }
            };

        $scope.EMAIL_REGEX = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
        $scope.NAME_REGEX = /^[a-zA-Z а-яА-Я]*$/;
        $scope.TEXT_REGEX = /^[a-zA-Z?!"',. -()а-яА-Я]*$/;

        }]);