(function (){
    'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
    $scope.listOfLunch = '';
    $scope.message = '';
    $scope.lists = null;

    $scope.check = function () {
        if ($scope.listOfLunch.length === 0) {
            $scope.message = 'Please enter data first.';
        } else {
            $scope.lists = $scope.listOfLunch.split(',').filter(s => s.trim().length > 0);
            var itemCount = $scope.lists.length;
            
            if (itemCount > 3) {
                $scope.message = 'Too much!';
            } else {
                $scope.message = 'Enjoy!';
            }
        }
        
    }
}
    
})();