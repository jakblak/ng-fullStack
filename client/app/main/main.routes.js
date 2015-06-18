(function() {
  'use strict';

  angular
    .module('app')
    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'app/main/main.html',
          controller: 'MainCtrl'
        })
        .when('/:id', {
          templateUrl: 'app/main/thing.html',
          controller: 'MainCtrl'
        });
    });

})();