angular.module('timeApp')
.directive('showTime', function() {

    return {
        scope: {
            pName: '=name',
        },
        restrict: 'E',
        template: '<div ng-click="timeClicked()"> Hello {{pName}}! The current time is {{time}} </div>',

        link: function(scope, element, attrs) {
            var currentTime = new Date();
            scope.time = currentTime.toString();
        },
        controller: function($scope) {
            $scope.shortFormat = false;

            $scope.timeClicked = function() {
                if ($scope.shortFormat) {
                    $scope.time = new Date();
                    $scope.time = $scope.time.toDateString();
                }
                else {
                    $scope.time = new Date();
                    $scope.time = $scope.time.toString();
                }

                $scope.shortFormat = !$scope.shortFormat;
            };
        }
    };




});
