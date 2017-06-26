(function() {
    'user strict';

    angular.module('public')
    .service('SignUpService', SignUpService);

    SignUpService.$inject = ['$http', 'ApiPath'];
    function SignUpService() {
        var service = this;

        // List of user preference
        var userPreferences = {};  

        service.savePreference = function(firstName, lastName, email, phone, favouriteDish) {
            userPreferences.firstName = firstName;
            userPreferences.lastName = lastName;
            userPreferences.email = email;
            userPreferences.phone = phone;
            userPreferences.favouriteDish = favouriteDish;
        }

        service.getPreference = function() {
            return userPreferences;
        }

        service.getFavouriteItem = function (shortName) {
            return $http.get(ApiPath + '/menu_items/' + shortName + '.json', config)
                .then(function (response) { return response.data; });
        };
    }
})();