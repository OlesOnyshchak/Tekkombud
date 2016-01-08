angular
    .module('app')
    .controller('AttachCVController', ['$scope', 'response', 'WelcomeService', '$modalInstance', function ($scope, response, WelcomeService, $modalInstance) {
        $scope.id = response;
        const ADD_CV_TO_OFFER = "add-cv-to-offer/" + $scope.id;

        $scope.employeeInformation = {};

        $scope.cancel = function () {
            $modalInstance.close();
        };
        $scope.EMAIL_REGEX = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
        $scope.NAME_REGEX = /^[a-zA-Z а-яА-Я]*$/;
        $scope.TEXT_REGEX = /^[a-zA-Z?!"',. -()а-яА-Я]*$/;
        $scope.PHONE_REGEX = /^[0-9]+$/;

        $scope.submit = function (employeeInformation) {
            $scope.$broadcast('show-errors-check-validity');
            if ($scope.cv.$valid) {
                WelcomeService.update(employeeInformation, ADD_CV_TO_OFFER);
                $modalInstance.close();
            }
        };
    }]);
