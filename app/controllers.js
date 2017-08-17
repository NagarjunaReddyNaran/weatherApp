'use strict';
/* Controllers */

var controllers = angular.module('controllers', []);
controllers.controller('FirstController', ['$scope', 'myService','$http',
    function ($scope, myService, $http) {

        // myService.getData().then(function (data) {
        //     $scope.items = data;
        // }).catch(function () {
        //     $scope.error = 'unable to get the ponies';
        // });


        $scope.getUserInfo = function () {
            $http.get('data/dummy.json')
                .then(function (result) {
                    $scope.items = result;
                    //console.log(result);
                }, function (result) {
                    //some error
                    console.log(result);
                });
        };
        $scope.getUserInfo();
    }
]);

controllers.controller('SecondController', ['$scope', '$mdDialog',
    function ($scope, $mdDialog) {



        //******* Open Modal Box ************//

        $scope.openModal = function () {
            $mdDialog.show({
                templateUrl: 'views/form.html',
                controller: 'FormController',
                clickOutsideToClose: true
            });
        };
    }
]);

controllers.controller('ThirdController', ['$scope',
    function ($scope) {
        // Do something.......
    }
]);

controllers.controller('FourthController', ['$scope','myCoordinates',
    function ($scope,myCoordinates) {
        myCoordinates.getData().then(function (data) {
            if(data){
                myCoordinates.getWeatherInfo(data.lat,data.lng).then(function (result) {
                    $scope.items = result;
                    $scope.todayDate = Date.now();
                    console.log("$scope.items result:::::::::::::", $scope.items);
                });
            }
        }).catch(function () {
            $scope.error = 'unable to get the ponies';
        });
    }
]);

controllers.controller('FormController', ['$scope', '$mdDialog',
    function ($scope, $mdDialog) {
        $scope.statuses = ['Planned', 'Confirmed', 'Cancelled'];
        $scope.options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', '...'];
        $scope.submit = function () {
            // submit code goes here
            $mdDialog.cancel();
        };
        $scope.reset = function () {
            $scope.obj = {
                name: "",
                myselect: "",
                status: ""
            }
        };
        $scope.reset();
    }
]);

controllers.controller('HeaderController', ['$scope', '$state',
    function ($scope, $state) {
        $scope.changeTab = function (tab) {
            console.log("tab : ",tab);
            $state.go(tab);
        }
    }
]);