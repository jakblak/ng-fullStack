(function() {
  'use strict';

  angular
    .module('app')
    .controller('MainCtrl',
      function($scope, $http, $location) {
        //$scope.awesomeThings = [];

        // GET all the things and show them
        $http.get('/api/things')
          .success(function(data) {
            $scope.things = data;
          })
          .error(function(data) {
            console.log('Error: ' + data);
          });

        $scope.create = function() {
          $http.post('/api/things', {
            name: $scope.name,
            info: $scope.info
          })
            .success(function(data) {
              $scope.name = '';
              $scope.info = '';
              $scope.things = data;
              //$location.url('/');
              console.log(data);
            })
            .error(function(data) {
              console.log('Error: ' + data);
            });
        };

        $scope.deleteThing = function(thing) {
          $http.delete('/api/things/' + thing._id);
        };
      });

})();