'use strict';

/**
 * @ngdoc function
 * @name xookFrontApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the xookFrontApp
 */
angular.module('xookFrontApp')
  .controller('LoginCtrl', function ($scope, $http, toastr, loginService, $location, $mdDialog, $interval) {
    $scope.load = false;
    $scope.register = false;
    $scope.agree = false;
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
            loginService.cacheSession('emailUser',$scope.user.email);
            loginService.cacheSession('tokenLogin', response['data']['token']);
            $scope.getRole();
            $location.path('/');
            //console.log($scope.role)
          },
          function (response) { // if error
            $scope.load = false;
            loginService.unCacheSession('userIsLogin');
            loginService.unCacheSession('tokenLogin');
            loginService.unCacheSession('emailUser');
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



    //*********************************************************************
    //                           POLITICAS
    //********************************************************************* 
    $scope.showAdvanced = function (ev) {
      $mdDialog.show({
          controller: DialogController,
          templateUrl: 'views/dialogPolitics.html',
          parent: angular.element(document.body),
          targetEvent: ev,
          clickOutsideToClose: true
        })
        .then(function (answer) {
          if (answer) {
            $scope.agree = true;
            //$scope.status = 'TRUE BIEN';
          } else {
            $scope.agree = false;
            //$scope.status = 'FALSE MALO';
          }

        }, function () {
          $scope.status = 'You cancelled the dialog.';
        });
    };



    function DialogController($scope, $mdDialog) {
      $scope.hide = function () {
        $mdDialog.hide();
      };
      $scope.cancel = function () {
        $mdDialog.cancel();
      };

      $scope.answer = function (answer) {
        $mdDialog.hide(answer);
      };


    }

    //*********************************************************************
    //                           REGISTER
    // This below section is register management of the xook users company
    // Erick Suy 090617
    //********************************************************************* 
    $scope.registerForm = function () { // show form of the register.
      $scope.register = true;
    };

    $scope.registerAction = function () { // 
     
      $scope.load = true; // this is variable that enable the progress bar
       var req = {
        method: 'POST',
        url: 'http://xook.com.gt:88/api/register',
        data: {
          'email': $scope.user.email,
          'password': $scope.user.pass,
          'name':'name xook',
          'lastname':'lastname xook',
          'birthdate':'2017-06-20',
          'id_profile_status':'1'
        }
      };
     
      //console.log(req.data);
      
      $http(req)
        .then(function (response) { //if status is success
            $scope.load = false; //this is variable that hide the progress bar
            console.log(response);
            //toastr.success(response['data'], "Register status");
            $scope.assingRole();
          },
          function (response) { // if error
            $scope.load = false;
            console.log(response);
            toastr.error(response['data'], "Register status");
          });

    };

    $scope.assingRole = function () {
      var nameRole = ($scope.tutors_check) ? 'tutor' : 'user';
      var req = {
        method: 'POST',
        url: 'http://xook.com.gt:88/api/assign-role',
        data: {
          'email': $scope.user.email,
          'role': nameRole,
        }
      };

      $http(req)
        .then(function (response) { //if status is success
            $scope.load = false; //this is variable that hide the progress bar
            console.log(response);
            toastr.success('Welcome to xook, company', "Rol status");
            $location.path('/');
          },
          function (response) { // if error
            $scope.load = false;
            console.log(response);
            toastr.error(response['data']['Error'], "Rol status");
          });

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
