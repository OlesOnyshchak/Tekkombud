angular
    .module('admin')
    .controller('InfoOfferController', ['$scope', 'response', 'SettingService', '$modalInstance', function ($scope, response, SettingService, $modalInstance) {
        $scope.offer = response;
        $scope.employees = $scope.offer.cvList;
        /* fillEmployeeObject($scope.offer.cvList);
         console.log($scope.employee.toString());

         function fillEmployeeObject(array){
         for(var i = 0;i<array.length;i++){
         $scope.employee+=($scope.offer.cvList[i]);
         }
         }*/

        console.log($scope.employee);
        $scope.cancel = function () {
            $modalInstance.close();
        };
        function sortEmployees() {
            $scope.sort = function (keyname) {
                $scope.sortKey = keyname;   //set the sortKey to the param passed
                $scope.reverse = !$scope.reverse; //if true make it false and vice versa
            }
        }
    }]);
