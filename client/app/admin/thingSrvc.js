(function() {
  'use strict';

  angular
    .module('app')
    .factory('thingApi', thingApi);

  thingApi.$inject = ['$http'];

  function thingApi($http) {
    return {
      createThing: createThing
    }

    function createThing(thing) {
      return $http.post('/api/things', thing)
        .then(function(response) {
          return response.data;
        });
    }
  }

})();