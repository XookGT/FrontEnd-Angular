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
