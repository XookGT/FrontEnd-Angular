'use strict';

/**
 * @ngdoc function
 * @name xookFrontApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the xookFrontApp
 */
angular.module('xookFrontApp')
  .controller('MenuCtrl', function ($translate, $scope, $timeout, $mdSidenav,loginService,$location) {

    $scope.changeLanguage = function (langKey) {
      $translate.use(langKey);
    };

    var originatorEv;
    $scope.openMenu = function ($mdOpenMenu, ev) {
      originatorEv = ev;
      $mdOpenMenu(ev);
    };


    // side menu

    $scope.toggleSidenav = function (menuId) {
      $mdSidenav(menuId).toggle();
    };


    $scope.logOut=function(){
      console.log("remove key");
      loginService.unCacheSession('userIsLogin');
      loginService.unCacheSession('tokenLogin');
      loginService.unCacheSession('role');
      console.log(loginService.getSession('role'));
      $location.path('/login');
    };
  });
