'use strict';

/**
 * @ngdoc function
 * @name xookFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the xookFrontApp
 */
angular.module('xookFrontApp')
  .controller('MainCtrl', function ($scope, $http) {

    $scope.menuTemplate = {
      url:  'views/menu.html'
    };
    
    $scope.roles=[
      {
        id:1,
        name: 'Administrator'
      },
      {
        id:2,
        name: 'Tutor'
      },{
        id:2,
        name: 'Student'
      }
    ];
    
    
    var urlCountries = 'https://restcountries.eu/rest/v2/all';
    // var vm = this;
    // vm.login = function(){
    //   authUser.loginApi(vm.loginForm);
    // };

    $scope.login = function () {
      $http({
        method: 'GET',
        url: urlCountries
      }).then(function successCallback(response) {
        console.log(response);
      }, function errorCallback(response) {
         console.log("Error"+response);
      });
    };


  });
