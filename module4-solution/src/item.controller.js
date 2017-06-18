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
    var itemParam = items[$stateParams.itemID];

    item.name = itemParam.name;
    item.description =  itemParam.description;
  }

})();