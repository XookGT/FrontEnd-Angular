'use strict';

/**
 * @ngdoc function
 * @name xookFrontApp.controller:ProvinceCtrl
 * @description
 * # ProvinceCtrl
 * Controller of the xookFrontApp
 */
angular.module('xookFrontApp')
  .controller('ProvinceCtrl', function ($scope, $http, toastr) {

    $scope.menuTemplate = {
      url: 'views/menu.html'
    };


    $scope.province ={
      name:"",
      country:""
    }

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


    $scope.SearchProvinces = function () {

      var urlProvince = 'http://xook.com.gt:88/api/province-all';
      $scope.provinces;
      $http({
        method: 'GET',
        url: urlProvince
      }).then(function successCallback(response) {
        $scope.provinces = response['data'];
        //console.log($scope.provinces);
      }, function errorCallback(response) {
        $scope.provinces = [{
          "id": 1,
          "name": "provinces no found"
        }];
      });

    };

    $scope.searchTerm;
    $scope.clearSearchTerm = function () {
      $scope.searchTerm = '';
    };

    $scope.addProvince = function () {
      // console.log('hola' + $scope.cat.nameCat);
      var req = {
        method: 'POST',
        url: 'http://xook.com.gt:88/api/province',
        data: {
          'name': $scope.province.name,
          'id_country': $scope.province.country
        }
      };

      $http(req)
        .then(function (response) {
            toastr.success(response['data']['msj'], "Province status");
          },
          function (response) { // optional
            toastr.error(response['data']['msj'], "Province status");
          });
    };

    //--------------------------------------------------------------------- EDIT PROVINCE
    $scope.selectEditprovince = function () {

      
      var req = {
        method: 'GET',
        url: 'http://xook.com.gt:88/api/province/' + $scope.selectprovinceEdit
      };

      $http(req)
        .then(function (response) {
            $scope.province.name = response['data'][0]['name'];
            $scope.province.country = response['data'][0]['id_country'];
          },
          function (response) { // optional
              $scope.province.name ="";
              $scope.province.country ="";
          });
    };

    $scope.editProvince = function () {
      var req = {
        method: 'PUT',
        url: 'http://xook.com.gt:88/api/province/' + $scope.selectprovinceEdit,
        data: {
          'name': $scope.province.name,
          'id_country':$scope.province.country
        }
      };

      $http(req)
        .then(function (response) {
            toastr.success(response['data']['msj'], "Province status");
            $scope.SearchProvinces();
          },
          function (response) { // optional
            toastr.error(response['data']['msj'], "Province status");
          });
    };

    //----------------------------------------------------------------------- REMOVE PROVINCE
    $scope.deleteprovince = function () {
      var req = {
        method: 'DELETE',
        url: 'http://xook.com.gt:88/api/province/' + $scope.removeprovince
      };

      $http(req)
        .then(function (response) {
            toastr.success(response['data']['msj'], "province status");
            $scope.SearchProvinces();
          },
          function (response) { // optional
            toastr.error(response['data']['msj'], "province status");
          });


    };


  });
