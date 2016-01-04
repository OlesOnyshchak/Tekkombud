angular
    .module('app')
    .controller('InternationalizationController', ['$scope', '$translate', '$log',
        function ($scope, $translate, $log) {

            $scope.languages = [
                {
                    key: 'eng',
                    name: "English"
                },
                {
                    key: 'ukr',
                    name: "Українська"
                }];
            $scope.changeLanguage = function (key) {
                console.log("okkk");
                $translate.use(key);
            };
        }]);
