(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListService', ShoppingListService);

    ToBuyController.$inject = ['ShoppingListService'];
    function ToBuyController(ShoppingListService) {
        
        var toBuyList = this;

        // toBuyList.items = ShoppingListService.items.filter(i => !i.bought);
        toBuyList.items = ShoppingListService.toBoughtItems;

        toBuyList.buyItem = function (itemIndex) {
            ShoppingListService.buyItem(itemIndex);
            //toBuyList.items = ShoppingListService.getToBuyItems();

        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListService'];
    function AlreadyBoughtController(ShoppingListService) {
        var alreadyBoughtList = this;

        //alreadyBoughtList.items = ShoppingListService.items.filter(i => i.bought);
        alreadyBoughtList.items = ShoppingListService.boughtItems;
    }

    function ShoppingListService() {
        var service = this;

        // List of shopping items
        service.items = [
            {
                name: 'Milk',
                quantity: 1,
                bought: false
            },
            {
                name: 'Cheese',
                quantity: 1,
                bought: false
            },
            {
                name: 'Instant Coffee',
                quantity: 1,
                bought: false
            },
            {
                name: 'Bread',
                quantity: 2,
                bought: true
            },
            {
                name: 'Honey',
                quantity: 1,
                bought: false
            },
            {
                name: 'Toilet Paper',
                quantity: 1,
                bought: false
            },
        ];

        service.boughtItems = [];
        service.toBoughtItems = [];
        service.boughtItems = service.boughtItems.concat(service.items.filter(i => i.bought));
        service.toBoughtItems = service.toBoughtItems.concat(service.items.filter(i => !i.bought));

        service.buyItem = function (itemIdex) {
            var boughtItem = service.toBoughtItems[itemIdex];
            boughtItem.bought = true;
            service.toBoughtItems.splice(itemIdex, 1);
            service.boughtItems.push(boughtItem);
        };
    }
    
})();