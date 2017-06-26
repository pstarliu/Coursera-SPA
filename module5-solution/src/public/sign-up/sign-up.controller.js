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

  signCtrl.submit = function () {
    signCtrl.completed = true;
    SignUpService.savePreference(signCtrl.firstName, signCtrl.lastName, signCtrl.email,
        signCtrl.phone, signCtrl.favouriteDish);
  };

  signCtrl.getPreference = function () {
    var result = SignUpService.getPreference();

    signCtrl.firstName = result.firstName;
    signCtrl.lastName = result.lastName;
    signCtrl.email = result.email;
    signCtrl.phone = result.phone;
    signCtrl.favouriteDish = result.favouriteDish;
  }
}

})();
