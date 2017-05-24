'use strict';

/**
 * @ngdoc function
 * @name xookFrontApp.controller:CategoriesCtrl
 * @description
 * # CategoriesCtrl
 * Controller of the xookFrontApp
 */
angular.module('xookFrontApp')
  .controller('CategoriesCtrl', function ($scope, $http, toastr) {

    $scope.menuTemplate = {
      url: 'views/menu.html'
    };

    //--------------------------------------------------------------------- SEARCH CATEGORY
    $scope.SearchCategories = function () {

      var urlCountries = 'http://xook.com.gt:88/api/categorie-all';
      $scope.categories;
      $http({
        method: 'GET',
        url: urlCountries
      }).then(function successCallback(response) {
        $scope.categories = response['data'];
        //console.log($scope.categories);
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

    //--------------------------------------------------------------------- ADD LEVEL


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


    //--------------------------------------------------------------------- EDIT CATEGORY
    $scope.selectEditCategory = function () {

      var req = {
        method: 'GET',
        url: 'http://xook.com.gt:88/api/categorie/' + $scope.selectCategoryEdit
      };

      $http(req)
        .then(function (response) {
            $scope.CategoryNameEdit = response['data']['name'];
          },
          function (response) { // optional


          });
    };

    $scope.editCategory = function () {
      var req = {
        method: 'PUT',
        url: 'http://xook.com.gt:88/api/categorie/' + $scope.selectCategoryEdit,
        data: {
          'name': $scope.CategoryNameEdit
        }
      };

      $http(req)
        .then(function (response) {
            toastr.success(response['data']['msj'], "Category status");
            $scope.SearchCategories();
          },
          function (response) { // optional
            toastr.error(response['data']['msj'], "Category status");
          });
    };

    //--------------------------------------------------------------------- REMOVE CATEGORY
    $scope.deleteCategory = function () {
      var req = {
        method: 'DELETE',
        url: 'http://xook.com.gt:88/api/categorie/' + $scope.removeCategory
      };

       $http(req)
        .then(function (response) {
            toastr.success(response['data']['msj'], "Category status");
            $scope.SearchCategories();
          },
          function (response) { // optional
            toastr.error(response['data']['msj'], "Category status");
          });
    };
  });
