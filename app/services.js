
/* Services */
var services = angular.module('services', []);

services.factory('myService', function ($http, $q) {
    return {
        // GET
        getData: function () {
            var deferred = $q.defer();
            var promise = $http.get('data/dummy.json').success(function (response) {
                deferred.resolve(response);
            });
            // Return the promise to the controller
            return deferred.promise;
        },

        //POST
        postData: function (movie) {
            var deferred = $q.defer();
            $http.post('/api/v1/movies/' + movie)
                .success(function (data) {
                    deferred.resolve({
                        title: data.title,
                        cost: data.price
                    });
                }).error(function (msg, code) {
                    deferred.reject(msg);
                    $log.error(msg, code);
                });
            return deferred.promise;
        }

    }
})
services.factory('myCoordinates', ['$q', '$http', function myCoordinates($q, $http) {
    return {
        // GET
        getData: function () {
            var deferred = $q.defer();
            var promise = $http.get('http://ip-api.com/json')
                            .success(function(coordinates) {
                                var myCoordinates = {};
                                myCoordinates.lat = coordinates.lat;
                                myCoordinates.lng = coordinates.lon;
                                myCoordinates.city = coordinates.city;
                                deferred.resolve(myCoordinates);
                        });
            // Return the promise to the controller
            return deferred.promise;
        },
        getWeatherInfo: function (lat,long) {
            var deferred = $q.defer();
            var promise = $http.get('http://api.openweathermap.org/data/2.5/weather?lat='+ lat + '&lon=' + long +'&appid=690660b930904f0cee1975853d5a2375')
                            .success(function(coordinates) {
                                deferred.resolve(coordinates);
                        });
            // Return the promise to the controller
            return deferred.promise;
        }
    }

}]);