(function () {
'use strict';

  angular.module('MenuApp')
    .controller('ItemController', ItemController);

//   ItemController.$inject = ['itemParam'];
//   function ItemController(itemParam) {
//       var item = this;
//       item
//       itemDetail.name = item.name;
//       itemDetail.description = item.description;
//       itemDetail.priceSmall = item.price_small;
//       itemDetail.priceLarge = item.price_large;
//   }

   ItemController.$inject = ['$stateParams', 'items'];
  function ItemController($stateParams, items) {
    var item = this;
    item.items = items.data.menu_items;
    // var itemParam = items[$stateParams.categoryName];

    // item.name = itemParam.name;
    // item.description =  itemParam.description;
  }

})();