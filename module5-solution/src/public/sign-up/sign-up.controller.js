(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['SignUpService'];
function SignUpController(SignUpService) {
  var signCtrl = this;
  signCtrl.firstName = "";
  signCtrl.lastName = "";
  signCtrl.email = "";
  signCtrl.phone = "";
  signCtrl.favouriteDish = "";
  signCtrl.completed = false;
  signCtrl.RESTFailed = false;

  signCtrl.submit = function () {
      signCtrl.RESTFailed = false;
          SignUpService.getFavouriteItem(true, signCtrl.favouriteDish)
          .then(function(result) {
              signCtrl.completed = true;
              SignUpService.savePreference(signCtrl.firstName, signCtrl.lastName, signCtrl.email,
              signCtrl.phone, signCtrl.favouriteDish, signCtrl.completed);
            })
          .catch (function(error) {
              signCtrl.RESTFailed = true;
              signCtrl.completed = false;
          });  
  };

  signCtrl.getPreference = function () {
      var result = SignUpService.getPreference();

      signCtrl.firstName = result.firstName;
      signCtrl.lastName = result.lastName;
      signCtrl.email = result.email;
      signCtrl.phone = result.phone;
      signCtrl.favouriteDish = result.favouriteDish;
      signCtrl.completed = result.completed;
  }
}

})();
