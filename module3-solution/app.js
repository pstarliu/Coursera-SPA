// Todo:
// Using Grid, see UI grid for AngularJS: http://ui-grid.info/docs/#/tutorial/101_intro
// Using Cache, see: https://stackoverflow.com/questions/14117653/how-to-cache-an-http-get-service-in-angularjs
// Both seems simple enough
(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com/')
        .directive('foundItems', FoundItems);

    function FoundItems() {
        var ddo = {
            templateUrl: 'foundList.html',
            scope: {
                items: '<',
                onRemove: '&'
            },
            controller: NarrowItDownController,
            controllerAs: 'list',
            bindToController: true
        };

        return ddo;
    }

    NarrowItDownController.$inject = ['MenuSearchService', '$scope'];
    function NarrowItDownController(MenuSearchService, $scope) {
        var narrowItDown = this;
        $scope.searchTerm = '';

        narrowItDown.search = function () {
            if ($scope.searchTerm.length > 0) {
                MenuSearchService.getMatchedMenuItems($scope.searchTerm)
                    .then(function (result) {
                        narrowItDown.found = result;
                    }).catch(function (error) {
                        console.log('NarrowItDownController promise went wrong.');
                    });
            }   
        }

        // var promise = MenuSearchService.getMatchedMenuItems();

        // promise.then(function (result) {
        //     narrowItDown.found = result.data.menu_items;
        //     console.log("found: " + narrowItDown.found.length);
        //     console.log("found[0]: " + narrowItDown.found[0]);
        // })
        // .catch(function(error) {
        //     console.log('http service request went wrong.', error);
        // });

        narrowItDown.removeItem = function (itemIndex) {
            console.log('going to remove: ' + narrowItDown.found[itemIndex]);
            narrowItDown.found.splice(itemIndex, 1);
        }

    }

    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {
        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {
            // return $http({
            //     method: "GET",
            //     url: (ApiBasePath + '/menu_items.json')
            // });
            return $http({
                method: "GET",
                url: (ApiBasePath + '/menu_items.json')
            })
                .then(function (result) {
                    // process result and only keep items that match
                    var foundItems = result.data.menu_items
                        .filter(i => i.description.toLowerCase().indexOf(searchTerm) > -1);

                    return foundItems;
                })
                .catch(function (error) {
                    console.log('http service request went wrong');
                });
        };
    }
})();