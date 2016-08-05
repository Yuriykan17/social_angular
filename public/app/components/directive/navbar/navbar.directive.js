(function() {
  'use strict';

  angular
    .module('paperless')
    .directive('paperlessNavbar', paperlessNavbar);

  /** @ngInject */
  function paperlessNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/directive/navbar/navbar.html',
      scope: {
        anyThing: '='
      },
      controller: NavbarController,
      controllerAs: 'navbar',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment) {
      var vm = this;
    }
  }

})();
