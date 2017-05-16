'use strict';

/**
 * @ngdoc function
 * @name xookFrontApp.controller:CoursesCtrl
 * @description
 * # CoursesCtrl
 * Controller of the xookFrontApp
 */
angular.module('xookFrontApp')
  .controller('CoursesCtrl', function ($scope, $http, toastr) {

    $scope.menuTemplate = {
      url: 'views/menu.html'
    };
    //init of the controller, all the function in this space is call when the controller is onload
    $scope.init = function () {
      $scope.SearchCategories();
      $scope.Searchlevels();
    };

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

    //template from course
    $scope.course = {
      name: '',
      description: '',
      category: '',
      level: ''
    };


    $scope.addCourse = function () {
      console.log($scope.course);
      var req = {
        method: 'POST',
        url: 'http://xook.com.gt:88/api/course',
        data: {
          'name': $scope.course.name,
          'description': $scope.course.description,
          'id_categorie': $scope.course.category,
          'id_level': $scope.course.level
        }
      };

      $http(req)
        .then(function (response) {
            toastr.success(response['data']['msj'], "Course status");
          },
          function (response) { // optional
            toastr.error(response['data']['msj'], "Course status");
          });
    };






  });
