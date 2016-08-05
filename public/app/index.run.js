(function() {
  'use strict';

  angular
    .module('paperless')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
