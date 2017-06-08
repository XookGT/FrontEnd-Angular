'use strict';

/**
 * @ngdoc function
 * @name xookFrontApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the xookFrontApp
 */
angular.module('xookFrontApp')
  .controller('LoginCtrl', function ($scope, $http, toastr, loginService, $location) {
    $scope.load = false;
    $scope.role = '';

    $scope.user = {
      email: '',
      pass: ''
    };


    $scope.menuTemplate = {
      url: 'views/menu.html'
    };



    //***************************************************************** add clas active of navbar  */
    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();

    };

    // ---------------------------------------------------------------- this is method that login management
    $scope.loginAction = function () {
      // console.log('hola' + $scope.cat.nameCat);
      $scope.load = true; // this is variable that enable the progress bar
      var req = {
        method: 'POST',
        url: 'http://xook.com.gt:88/api/authenticate',
        data: {
          'email': $scope.user.email,
          'password': $scope.user.pass
        }
      };

      $http(req)
        .then(function (response) { //if status is success
            $scope.load = false; //this is variable that hide the progress bar
            loginService.cacheSession('userIsLogin', true);
            loginService.cacheSession('tokenLogin', response['data']['token']);
            $scope.getRole();
            $location.path('/');
            //console.log($scope.role)
          },
          function (response) { // if error
            $scope.load = false;
            loginService.unCacheSession('userIsLogin');
            loginService.unCacheSession('tokenLogin');
            $scope.role = "";
            toastr.error(response['data']['error'], "Login status");
          });
    };

    // -----------------------------------------------------------------this is method that management role users
    $scope.getRole = function () {
      if (sessionStorage.getItem('tokenLogin') != null) {
        var token = 'bearer ' + sessionStorage.getItem('tokenLogin');
        var req = {
          method: 'POST',
          url: 'http://xook.com.gt:88/api/me/role',
          headers: {
            'Authorization': token
          }
        };

        $http(req)
          .then(function (response) {
              loginService.cacheSession('role', response['data']['role']);
            },
            function (response) { // optional
              $scope.role = "";
              loginService.unCacheSession('role');
            });
      }
    };


    //-------------------------------------------- case of the role.
    $scope.IsAdmin = function () {
      return loginService.getSession('role') == 'admin';
    };

    $scope.IsTutor = function () {
      //console.log(loginService.getSession('role'));
      return loginService.getSession('role') == 'tutor';
    };

    $scope.IsUser = function () {
      //console.log(loginService.getSession('role'));
      return loginService.getSession('role') == 'user';
    };

    $scope.IsLogin = function () {
      return loginService.getSession('userIsLogin') == 'true';
    };
  });
