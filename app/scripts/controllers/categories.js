'use strict';

/**
 * @ngdoc function
 * @name xookFrontApp.controller:CategoriesCtrl
 * @description
 * # CategoriesCtrl
 * Controller of the xookFrontApp
 */
angular.module('xookFrontApp')
  .controller('CategoriesCtrl', function ($scope, $http,toastr) {

    $scope.SearchCategories = function () {

      var urlCountries = 'http://xook.com.gt:88/api/categorie-all';
      $scope.categories;
      $http({
        method: 'GET',
        url: urlCountries
      }).then(function successCallback(response) {
        $scope.categories = response['data'];
        console.log($scope.categories);
      }, function errorCallback(response) {
        $scope.categories = [{
          "id": 1,
          "name": "categories no found"
        }];
      });

    };

    $scope.searchTerm;
    $scope.clearSearchTerm = function () {
      $scope.searchTerm = '';
    };


    $scope.addCategorie = function () {
      // console.log('hola' + $scope.cat.nameCat);
      var req = {
        method: 'POST',
        url: 'http://xook.com.gt:88/api/categorie',
        data: {
          'name': $scope.cat.nameCat
        }
      };

      $http(req)
       .then(function (response) {            
            toastr.success(response['data']['msj'], "Category status");
          },
          function (response) { // optional
            toastr.error(response['data']['msj'], "Category status");
          });



    };

  });
