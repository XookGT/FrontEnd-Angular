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
    //*************************************************************************** ACTIVE CLASS */
    $scope.isActive= function (viewLocation) {
      return viewLocation===$location.path();

    };
    
    //*************************************************************************** CHANGE LANGUAGE */
    $scope.changeLanguage = function (langKey) {
      $translate.use(langKey);
    };
    //**************************************************************************** OPEN MENU DROP */
    var originatorEv;
    $scope.openMenu = function ($mdOpenMenu, ev) {
      originatorEv = ev;
      $mdOpenMenu(ev);
    };


    // ************************************************************************* SIDE MENU

    $scope.toggleSidenav = function (menuId) {
      $mdSidenav(menuId).toggle();
    };

    // ************************************************************************* LOGOUT
    $scope.logOut=function(){
      console.log("remove key");
      loginService.unCacheSession('userIsLogin');
      loginService.unCacheSession('tokenLogin');
      loginService.unCacheSession('role');
      console.log(loginService.getSession('role'));
      $location.path('/login');
    };
  });
