'use strict';

/**
 * @ngdoc function
 * @name xookFrontApp.controller:CountryCtrl
 * @description
 * # CountryCtrl
 * Controller of the xookFrontApp
 */
angular.module('xookFrontApp')
  .controller('CountryCtrl', function ($scope, $http, toastr, $sce) {
    $scope.menuTemplate = {
      url: 'views/menu.html'
    };

    $scope.SearchCountries = function () {

      var urlCountries = 'http://xook.com.gt:88/api/country-all';
      $scope.countries;
      $http({
        method: 'GET',
        url: urlCountries
      }).then(function successCallback(response) {
        $scope.countries = response['data'];
        //console.log($scope.countries);
      }, function errorCallback(response) {
        $scope.countries = [{
          "id": 1,
          "name": "countries no found"
        }];
      });

    };

    $scope.searchTerm;
    $scope.clearSearchTerm = function () {
      $scope.searchTerm = '';
    };

    $scope.addCountry = function () {
       console.log('hola' + $scope.cat.nameCountry);
      var req = {
        method: 'POST',
        url: 'http://xook.com.gt:88/api/country',
        data: {
          'name': $scope.cat.nameCountry
        }
      };

      $http(req)
        .then(function (response) {
            toastr.success(response['data']['msj'], "country status");
          },
          function (response) { // optional
            toastr.error(response['data']['msj'], "country status");
          });
    };

    //--------------------------------------------------------------------- EDIT country
    $scope.selectEditcountry = function () {

      //console.log($scope.selectCountryEdit);
      var req = {
        method: 'GET',
        url: 'http://xook.com.gt:88/api/country/' + $scope.selectCountryEdit
      };

      $http(req)
        .then(function (response) {
            $scope.CountryNameEdit = response['data']['name'];
            // console.log($scope.CountryNameEdit);

          },
          function (response) { // optional

            console.log(response);

          });
    };

    $scope.editCountry = function () {
      var req = {
        method: 'PUT',
        url: 'http://xook.com.gt:88/api/country/' + $scope.selectCountryEdit,
        data: {
          'name': $scope.CountryNameEdit
        }
      };

      $http(req)
        .then(function (response) {
            toastr.success(response['data']['msj'], "country status");
            $scope.SearchCountries();
          },
          function (response) { // optional
            toastr.error(response['data']['msj'], "country status");
          });
    };

    //----------------------------------------------------------------------- REMOVE country
    $scope.deleteCountry = function () {
      var req = {
        method: 'DELETE',
        url: 'http://xook.com.gt:88/api/country/' + $scope.removeCountry
      };

      $http(req)
        .then(function (response) {
            toastr.success(response['data']['msj'], "country status");
            $scope.SearchCountries();
          },
          function (response) { // optional
            toastr.error(response['data']['msj'], "country status");
          });


    };
  });
