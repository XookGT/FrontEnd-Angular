'use strict';

/**
 * @ngdoc function
 * @name xookFrontApp.controller:LevelsCtrl
 * @description
 * # LevelsCtrl
 * Controller of the xookFrontApp
 */
angular.module('xookFrontApp')
  .controller('LevelsCtrl', function ($scope, $http,toastr) {

    $scope.Searchlevels = function () {

      var urlCountries = 'http://xook.com.gt:9080/api/level-all';
      $scope.users;
      $http({
        method: 'GET',
        url: urlCountries
      }).then(function successCallback(response) {
        $scope.users = response['data'];
        console.log($scope.users);
      }, function errorCallback(response) {
        $scope.users = [{
          "id": 1,
          "name": "levels no found"
        }];
      });

    };

    $scope.searchTerm;
    $scope.clearSearchTerm = function () {
      $scope.searchTerm = '';
    };

    $scope.addLevel = function () {
      // console.log('hola' + $scope.cat.nameCat);
      var req = {
        method: 'POST',
        url: 'http://xook.com.gt:9080/api/level',
        data: {
          'name': $scope.cat.nameLevel,
          'starts': "0",
          'rank': "0"
        }
      };

      $http(req)
        .then(function (response) {            
            toastr.success(response['data']['msj'], "Level status");
          },
          function (response) { // optional
            toastr.error(response['data']['msj'], "Level status");
          });
    };

  });
