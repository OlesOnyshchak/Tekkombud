angular
    .module('app')
    .controller('ModalWelcomeController', ['$scope','response',function ($scope, response) {

            $scope.info = response;

            $scope.cancel = function () {

            };
            $scope.submit = function () {

            };
        }]);