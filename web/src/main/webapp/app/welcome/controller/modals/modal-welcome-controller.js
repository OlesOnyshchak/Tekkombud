angular
    .module('app')
    .controller('ModalWelcomeController', ['$scope','response','WelcomeService','$modalInstance',function ($scope, response,WelcomeService,$modalInstance) {
        $scope.FIRST_LAST_NAME_REGEX = /^([A-Z\u0410-\u042f\u0407\u0406\u0404'][a-z\u0430-\u044f\u0456\u0457\u0454']{1,20}\u002d[A-Z\u0410-\u042f\u0407\u0406\u0404'][a-z\u0430-\u044f\u0456\u0457\u0454']{1,20}|[A-Z\u0410-\u042f\u0407\u0406\u0404'][a-z\u0430-\u044f\u0456\u0457\u0454']{1,20})$/;
            $scope.info = response;

            $scope.cancel = function () {
                $modalInstance.close();
            };

            $scope.submit = function () {
                WelcomeService.saveMessage($scope.info);
                $modalInstance.close("submit");
            };
        }]);