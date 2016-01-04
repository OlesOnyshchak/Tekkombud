angular
    .module('app')
    .controller('InternationalizationController', ['$scope', '$translate',
        function ($scope, $translate) {

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
                $translate.use(key);
            };
        }]);
