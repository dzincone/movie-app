var app = angular.module('newApp', ['ngRoute'])

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HeaderController'
      })
      .when('/movie/:id', {
        templateUrl: 'partials/movie.html',
        controller: 'HeaderController'
      })
      .otherwise({redirectTo: "/"})

      $locationProvider.html5Mode(true)
});

app.controller("HeaderController", function($scope, $http, $routeParams, $location){
  $scope.search = null,
  $scope.searchOMDB = function(){
    $location.path("/")
    $http.get("http://www.omdbapi.com/?s=" + $scope.search).then(function(movies){
      $scope.movieInfo = movies

    })
  },
  $http.get("http://www.omdbapi.com/?i=" + $routeParams.id).then(function(movie){
    $scope.movieFull = movie.data
  })

})
