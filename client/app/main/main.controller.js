(function() {
  'use strict';

  angular
    .module('app')
    .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['$scope', '$http', '$location', '$alert'];

  function MainCtrl($scope, $http, $location, $alert) {

    var alert = $alert({
        title: 'Success!',
        content: 'The contact was deleted successfully.',
        type: 'success',
        container: '#alertContainer',
        show: false
    });
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
          $scope.things.push(data);
          $scope.name = '';
          $scope.info = '';
          alert.show();
          console.log(data);
          //$location.url('/#things');
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