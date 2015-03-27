

  var portfolioApp = angular.module('portfolioApp', [ 'ngRoute', 'ngMaterial'])

    .config(function($routeProvider) {
      $routeProvider
        .when('/home', {
          templateUrl: 'views/home.html',
          controller: 'homeCtrl'
        })
        .when('/portfolio', {
          templateUrl: 'views/portfolio.html',
          controller: 'portfolioCtrl'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'aboutCtrl'
        })
        .when('/contact', {
          templateUrl: 'views/contact.html',
          controller: 'contactCtrl'
        })
        .otherwise({
          redirectTo: '/home'
        })
    });

    portfolioApp.controller('homeCtrl', ['$scope', function($scope) {
      
    }])

    .controller('portfolioCtrl', ['$scope', function ($scope) {
      
    }])

    .controller('aboutCtrl', ['$scope', function ($scope) {
      
    }])

    .controller('contactCtrl', ['$scope', function ($scope) {
      
    }]);
