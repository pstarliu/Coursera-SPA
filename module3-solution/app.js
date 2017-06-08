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

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var narrowItDown = this;
        narrowItDown.found = MenuSearchService.getMatchedMenuItems();
        console.log("found: " + narrowItDown.found.length);
        console.log("found[0]: " + narrowItDown.found[0]);

        narrowItDown.removeItem = function (itemIndex) {
            console.log('going to remove: ' + narrowItDown.found[itemIndex]);
        }

    }

    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {
        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {
            return $http({
                method: "GET",
                url: (ApiBasePath + '/menu_items.json')
            })
                .then(function (result) {
                    // process result and only keep items that match
                    var foundItems = result.data;
                    return foundItems;
                })
                .catch(function (error) {
                    console.log('http service request went wrong');
                });
        }
    }
})();