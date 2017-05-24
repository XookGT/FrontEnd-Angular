'use strict';

/**
 * @ngdoc function
 * @name xookFrontApp.controller:LevelsCtrl
 * @description
 * # LevelsCtrl
 * Controller of the xookFrontApp
 */
angular.module('xookFrontApp')
  .controller('LevelsCtrl', function ($scope, $http, toastr) {

    $scope.menuTemplate = {
      url: 'views/menu.html'
    };

    $scope.Searchlevels = function () {

      var urlCountries = 'http://xook.com.gt:88/api/level-all';
      $scope.levels;
      $http({
        method: 'GET',
        url: urlCountries
      }).then(function successCallback(response) {
        $scope.levels = response['data'];
        //console.log($scope.levels);
      }, function errorCallback(response) {
        $scope.levels = [{
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
        url: 'http://xook.com.gt:88/api/level',
        data: {
          'name': $scope.cat.nameLevel
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

    //--------------------------------------------------------------------- EDIT LEVEL
    $scope.selectEditLevel = function () {

      //console.log($scope.selectLevelEdit);
      var req = {
        method: 'GET',
        url: 'http://xook.com.gt:88/api/level/' + $scope.selectLevelEdit
      };

      $http(req)
        .then(function (response) {
            $scope.levelNameEdit = response['data']['name'];
            //console.log($scope.levelNameEdit);

          },
          function (response) { // optional

            //console.log(response);

          });
    };

    $scope.editLevel = function () {
      var req = {
        method: 'PUT',
        url: 'http://xook.com.gt:88/api/level/' + $scope.selectLevelEdit,
        data: {
          'name': $scope.levelNameEdit
        }
      };

      $http(req)
        .then(function (response) {
            toastr.success(response['data']['msj'], "Level status");
            $scope.Searchlevels();
          },
          function (response) { // optional
            toastr.error(response['data']['msj'], "Level status");
          });
    };

    //----------------------------------------------------------------------- REMOVE LEVEL
    $scope.deleteLevel = function () {
      var req = {
        method: 'DELETE',
        url: 'http://xook.com.gt:88/api/level/' + $scope.removeLevel
      };

       $http(req)
        .then(function (response) {
            toastr.success(response['data']['msj'], "Level status");
            $scope.Searchlevels();
          },
          function (response) { // optional
            toastr.error(response['data']['msj'], "Level status");
          });


    };

  });
