(function() {
  'use strict';

  angular
    .module('app')
    .factory('thingApi', thingApi);

  thingApi.$inject = ['$http', '$route'];

  function thingApi($http, $route) {
    return ({
      getThings: getThings,
      findOneThing: findOneThing,
      createThing: createThing,
      deleteThing: deleteThing
    });

    // GET all things
    function getThings() {
      var url = '/api/things';
      var request = $http.get(url, {
        cache: true
      });
      return (request.then(handleSuccess, handleError));
    }

    function createThing(post) {
      return $http.post('/api/things', post);
    }

    function deleteThing(thing) {
      return $http.delete('/api/things/' + thing._id);
    }

    function findOneThing(thing) {
      var url = '/api/things/' + $route.current.params.id;
      var request = $http.get(url);
      return (request.then(handleSuccess, handleError));
    }

    function handleError(response) {
      throw (response.data.message);
    }

    // handle success
    function handleSuccess(response) {
      return (response.data);
    }
  }
})();