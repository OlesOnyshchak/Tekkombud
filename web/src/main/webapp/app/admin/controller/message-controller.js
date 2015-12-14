angular.module('admin')
    .controller('MessageController', ['$scope', '$http','SettingService', function ($scope, $http, SettingService) {
        $scope.filteredTodos = [];
        $scope.itemsPerPage = 30;
        $scope.currentPage = 4;

        $scope.makeTodos = function() {
            $scope.todos = [];
            for (i=1;i<=1000;i++) {
                $scope.todos.push({ text:'todo '+i, done:false});
            }
        };

        $scope.figureOutTodosToDisplay = function() {
            var begin = (($scope.currentPage - 1) * $scope.itemsPerPage);
            var end = begin + $scope.itemsPerPage;
            $scope.filteredTodos = $scope.todos.slice(begin, end);
        };

        $scope.makeTodos();
        $scope.figureOutTodosToDisplay();

        $scope.pageChanged = function() {
            $scope.figureOutTodosToDisplay();
        };
    }]);
