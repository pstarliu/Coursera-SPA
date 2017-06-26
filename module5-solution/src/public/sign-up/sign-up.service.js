(function() {
    'user strict';

    angular.module('public')
    .service('SignUpService', SignUpService);

    SignUpService.$inject = ['$http', 'ApiPath'];
    function SignUpService($http, ApiPath) {
        var service = this;

        // List of user preference
        var userPreferences = {};  

        service.savePreference = function(firstName, lastName, email, phone, favouriteDish, completed) {
            userPreferences.firstName = firstName;
            userPreferences.lastName = lastName;
            userPreferences.email = email;
            userPreferences.phone = phone;
            userPreferences.favouriteDish = favouriteDish;
            userPreferences.completed = completed
        }

        service.getPreference = function() {
            return userPreferences;
        }

        service.getFavouriteItem = function () {
            if (userPreferences.completed) {
                return $http.get(ApiPath + '/menu_items/' + userPreferences.favouriteDish + '.json')
                    .then(function (response) { return response.data; })
            }
        };
    }
})();