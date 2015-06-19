(function() {
  'use strict';

  angular
    .module('app')
    .directive('editable', editable);

  editable.$inject = ['$scope'];

  function editable() {
    return {
      restrict: 'AE'
    }
  }

})();