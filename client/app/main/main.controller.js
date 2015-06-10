(function() {
  'use strict';

  angular
    .module('app')
    .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['$scope', '$http', '$location', '$alert'];

  function MainCtrl($scope, $http, $location, $alert) {

    $scope.alert = {
      "placement": "top",
      "title": "Success!",
      "content": "New thing has been added",
      "type": "success",
      "animation": "am-fade-and-slide-top"
    };

    // GET all the things and show them
    $http.get('/api/things', {
      cache: true
    })
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
          if (!($scope.name && $scope.info === '')) {
            $scope.things.push(data);
            $scope.name = '';
            $scope.info = '';
            console.log(data);
            //if ($scope.data)
            //$location.url('/#things');
          }
        })
        .error(function(data) {
          console.log('Error: ' + data);
        });
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };
  };

})();