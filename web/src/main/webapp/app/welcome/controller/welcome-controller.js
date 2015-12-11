angular.module('app')
    .controller('WelcomeController', ['$scope','WelcomeService','$modal', function($scope, WelcomeService,$modal) {
        $scope.message= {};

        $scope.saveMessage = function(reg){
            console.log(reg);

            var modalInstance = $modal.open({
                animation: true,
                templateUrl: 'app/welcome/template/modals/confirm-message.html',
                controller: 'ModalWelcomeController',
                size: 'md',
                resolve: {
                    response: function () {
                        return reg;
                    }
                }
            });
           /* WelcomeService.saveMessage(reg);
            $scope.message= {};*/
        };

        $scope.clearMessage = function(){
            $scope.message= {};
        }
    }]);