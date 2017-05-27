(function (){
    'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
    $scope.listOfLunch = '';
    $scope.message = '';

    $scope.check = function () {
        if ($scope.listOfLunch.length === 0) {
            $scope.message = 'Please enter data first.';
        } else {
            var itemCount = $scope.listOfLunch.split(',').length;
            if (itemCount > 3) {
                $scope.message = 'Too much!';
            } else {
                $scope.message = 'Enjoy!';
            }
        }
        
    }
}
    
})();