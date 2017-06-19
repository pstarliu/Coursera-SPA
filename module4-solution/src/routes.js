(function () {
    'use strict';

    angular.module('MenuApp').config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider

            .state('home', {
                url: '/',    // this is optional 
                templateUrl: 'templates/home.html'
            })

            .state('categories', {
                url: '/categories',    // this is optional
                templateUrl: 'templates/main-categories.html',
                controller: 'CategoriesController as categoryCtrl',
                resolve: {
                    categories: ['MenuDataService', function ( MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })

            .state('items', {
                url: '/items/{categoryName}',
                templateUrl: 'templates/main-items.html',
                controller: 'ItemController as itemCtrl',
                resolve: {
                    items: [ 'MenuDataService','$stateParams', function ( MenuDataService, $stateParams) {
                        return MenuDataService.getItemsForCategory($stateParams.categoryName);
                    }]
                }
            });

    }

})();