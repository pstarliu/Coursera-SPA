(function () {
'use strict';

  angular.module('MenuApp')
    .component('itemList', {
      templateUrl: 'templates/items.html',
      bindings: {
        items: '<' 
      }
    });

})();