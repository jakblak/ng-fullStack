(function() {
  'use strict';

  angular
    .module('app')
    .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['$scope', '$http', '$location', '$alert', 'thingApi'];

  function MainCtrl($scope, $http, $location, $alert, thingApi) {

    var alert = $alert({
      title: 'Success!',
      content: 'The contact was added successfully.',
      type: 'success',
      container: '#alertContainer',
      show: false,
      duration: 3
    });

    $scope.showAlert = false;

    // GET all the things and show them
    thingApi.getThings()
      .then(function(result) {
        $scope.things = result;
      });

    $scope.create = function(post) {
      thingApi.createThing({
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
      thingApi.deleteThing(thing)
        .success(function(data) {
          $scope.things.splice(data, 1);
        })
        .error(function(data) {
          console.log('Error: ' + data);
        });
    };

  };
})();