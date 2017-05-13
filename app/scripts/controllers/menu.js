'use strict';

/**
 * @ngdoc function
 * @name xookFrontApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the xookFrontApp
 */
angular.module('xookFrontApp')
  .controller('MenuCtrl', function ($translate,$scope) {
   
    $scope.changeLanguage = function (langKey) {
      $translate.use(langKey);
    };

    var originatorEv;
    $scope.openMenu = function ($mdOpenMenu, ev) {
      originatorEv = ev;
      $mdOpenMenu(ev);
      console.log('this si menu');
    };

  });
