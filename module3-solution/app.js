// Todo:
// Using Grid, see UI grid for AngularJS: http://ui-grid.info/docs/#/tutorial/101_intro
// Using Cache, see: https://stackoverflow.com/questions/14117653/how-to-cache-an-http-get-service-in-angularjs
// Both seems simple enough
(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController')
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', 'https://davids-restaurant.herokuapp.com/');
.directive('foundItems', FoundItem);


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {

}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
    var service = this;

    service.getMatchedMenuItems = function (searchTerm) {
        var respose = $http(...).then(function (result) {
        }
        return response;
    // process result and only keep items that match
    var foundItems...

    // return processed items
    return foundItems;
});
    }
}
})();
