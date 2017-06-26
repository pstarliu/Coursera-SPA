(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['myInfo', 'favouriteItem'];
function MyInfoController(myInfo, favouriteItem) {
  var infoCtrl = this;
  infoCtrl.myInfo = myInfo;
  infoCtrl.favouriteItem = favouriteItem;
}

})();
