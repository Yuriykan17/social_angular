(function() {
  'use strict';

  angular
    .module('paperless')
    .directive('paperlessFooter', paperlessFooter);

  /** @ngInject */
  function paperlessFooter() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/directive/footer/footer.html',
      scope: {
        anyThing: '='
      },
      controller: FooterController,
      controllerAs: 'footer',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function FooterController(moment) {
      var vm = this;
    }
  }

})();
