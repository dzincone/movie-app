var app = angular.module('newApp', ['ngRoute'])

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      .when('/projects', {
        templateUrl: 'partials/projects.html',
        controller: 'ProjectsController'
      })
      .when('/bio', {
        templateUrl: 'partials/bio.html',
        controller: 'BioController'
      })
      .when('/resume', {
        templateUrl: 'partials/resume.html',
        controller: 'ResumeController'
      })
      .when('/:math/:first/:second', {
        templateUrl: 'partials/math.html',
        controller: 'AdditionController'
      })
      .otherwise({redirectTo: "/"})

      $locationProvider.html5Mode(true)
});

app.controller("HeaderController", function($scope){
  $scope.search = null;
})
