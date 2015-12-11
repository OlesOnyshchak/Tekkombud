angular.module('app')
    .controller('WelcomeController', ['$scope', 'WelcomeService', '$modal', function ($scope, WelcomeService, $modal) {
        $scope.message = {};

        $scope.saveMessage = function (reg) {
            var modalInstance = $modal.open({
                animation: true,
                templateUrl: 'app/welcome/template/modals/confirm-message.html',
                controller: 'ModalWelcomeController',
                size: 'md',
                resolve: {
                    response: function () {
                        console.log("hello");
                        return reg;
                    }
                }
            });
            modalInstance.result.then(function (result) {
                if (result === "submit"){
                    $scope.message = {};
                }
            })
        };

        $scope.clearMessage = function () {
            $scope.message = {};
        }
    }]);