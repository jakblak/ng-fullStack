(function() {
  'use strict';

  angular
    .module('app')
    .factory('thingApi', thingApi);

  thingApi.$inject = ['$http'];

  function thingApi($http) {
    return ({
      getThings: getThings,
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

    function handleError(response) {
      throw (response.data.message);
    }

    // handle success
    function handleSuccess(response) {
      return (response.data);
    }
  }
})();