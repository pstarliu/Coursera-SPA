(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

//SignUpController.$inject = ['signUpController'];
function SignUpController() {
  var signCtrl = this;

  signCtrl.submit = function () {
    signCtrl.completed = true;
  };
}

})();
