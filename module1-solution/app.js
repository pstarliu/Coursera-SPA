(function (){
    'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
    $scope.listOfLunch = '';
    $scope.message = '';
    $scope.lists = null;
    $scope.messageStyle = {};
    $scope.inputBoxSytle = {};

    $scope.turnGreen = function () {
        $scope.messageStyle.colorClass = "green";
        $scope.inputBoxSytle.borderClass = 'green-border';
    }

    $scope.turnRed = function () {
        $scope.messageStyle.colorClass = "red";
        $scope.inputBoxSytle.borderClass = 'red-border';
    }

    $scope.check = function () {
        if ($scope.listOfLunch.length === 0) {
            $scope.message = 'Please enter data first.';
            $scope.turnRed();
        } else {
            $scope.turnGreen();
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