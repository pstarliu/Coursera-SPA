(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://protected-inlet-48511.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
