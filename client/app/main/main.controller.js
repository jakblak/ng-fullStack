(function() {
    'use strict';

    angular
      .module('app')
      .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$scope', '$http', '$location', '$alert', 'thingApi'];

    function MainCtrl($scope, $http, $location, $alert, thingApi) {

      $scope.alert = {
        "placement": "top",
        "title": "Success!",
        "content": "New thing has been added",
        "type": "success",
        "animation": "am-fade-and-slide-top"
      };

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
            console.log(data);
            //$location.url('/#things');
          })
          .error(function(data) {
            console.log('Error: ' + data);
          });
      };

      $scope.deleteThing = function(thing) {
        $http.delete('/api/things/' + thing._id)
          .success(function(data) {
              $scope.things.splice(data, 1);
            })
            .error(function(data) {
              console.log('Error: ' + data);
            });
        };
      };

    })();