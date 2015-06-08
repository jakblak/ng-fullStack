(function() {
  'use strict';

  angular
    .module('app')
    .controller('MainCtrl', function($scope, $http) {
      $scope.awesomeThings = [];

      $http.get('/api/things')
        .success(function(awesomeThings) {
          $scope.awesomeThings = awesomeThings;
        });

      $scope.create = function() {
        if ($scope.newThing === '') {
          return;
        }
        $http.post('/api/things', {
          //name: $scope.newThing
          name: this.name,
          info: this.info
        });
        $scope.newThing = '';
      };

      $scope.deleteThing = function(thing) {
        $http.delete('/api/things/' + thing._id);
      };
    });

})();