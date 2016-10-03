(function() {
  'use strict';

  angular
    .module('paperless')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController() {
    var vm = this;
    vm.icon = [
    './assets/home/ico-1.png',
    './assets/home/ico-2.png',
    './assets/home/ico-3.png',
    './assets/home/ico-4.png',
    './assets/home/ico-5.png',
    './assets/home/ico-6.png',
    './assets/home/ico-7.png',
    './assets/home/ico-8.png',
    ]
  }
})();
