'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ui.bootstrap',
  'ngRoute',
  'ui.router',
  'controllers',
  'services',
  'directives',
  'ngMaterial', 
  'ngMessages',
  'material.svgAssetsCache'
  
]).

config([
    '$stateProvider',  function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                url: '',
                views: {
                    'header@': {
                        templateUrl: 'views/app.header.html',
                        controller: 'HeaderController'
                    },
                    'content@': {
                        templateUrl: 'views/view4.html',
                        controller: 'FourthController'
                    },
                    'footer@': {
                        templateUrl: 'views/app.footer.html'
                    }
                }
            })
            .state('view1', {
                url: '/views/view1',
                views: {
                    'header@': {
                        templateUrl: 'views/app.header.html',
                        controller: 'HeaderController'
                    },
                    'content@': {
                        templateUrl: 'views/view1.html',
                        controller: 'FirstController'
                    },
                    'footer@': {
                        templateUrl: 'views/app.footer.html'
                    }
                }
            })
            .state('view2', {
                url: '/views/view2',
                views: {
                    'header@': {
                        templateUrl: 'views/app.header.html',
                        controller: 'HeaderController'
                    },
                    'content@': {
                        templateUrl: 'views/view2.html',
                        controller: 'SecondController'
                    },
                    'footer@': {
                        templateUrl: 'views/app.footer.html'
                    }
                }
            }).state('view3', {
                url: '/views/view3',
                views: {
                    'header@': {
                        templateUrl: 'views/app.header.html',
                        controller: 'HeaderController'
                    },
                    'content@': {
                        templateUrl: 'views/view3.html',
                        controller: 'ThirdController'
                    },
                    'footer@': {
                        templateUrl: 'views/app.footer.html'
                    }
                }
            }).state('view4', {
                url: '/views/view4',
                views: {
                    'header@': {
                        templateUrl: 'views/app.header.html',
                        controller: 'HeaderController'
                    },
                    'content@': {
                        templateUrl: 'views/view4.html',
                        controller: 'FourthController'
                    },
                    'footer@': {
                        templateUrl: 'views/app.footer.html'
                    }
                }
            });
    }
]);