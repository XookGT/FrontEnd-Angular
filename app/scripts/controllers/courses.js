'use strict';

/**
 * @ngdoc function
 * @name xookFrontApp.controller:CoursesCtrl
 * @description
 * # CoursesCtrl
 * Controller of the xookFrontApp
 */
angular.module('xookFrontApp')
  .controller('CoursesCtrl', function ($scope, $http, toastr, $sce) {

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
      level: '',
      stars: 0,
      edit: ''
    };
    //--------------------------------------------------------------------- PUT STAR}
    $scope.stars = function (promedioStars) {
      var estrellasHTML = '';
      var promedioEntero = Math.floor(promedioStars);
      for (var i = 0; i < promedioEntero; i += 1) {
        estrellasHTML += '<i class="fa fa-star fa-5x" style="color:yellow"></i>';
      }
      if (promedioStars > promedioEntero) {
        estrellasHTML += '<i class="fa fa-star-half-o fa-5x" style="color:yellow"></i>';
      }
      $scope.course.starVisual = $sce.trustAsHtml(estrellasHTML+'<br><h1>'+promedioStars+'</h1>');
    };




    //--------------------------------------------------------------------- SEARCH COURSE
    $scope.Searchcourses = function () {

      var urlCourse = 'http://xook.com.gt:88/api/course-all';
      $scope.courses;
      $http({
        method: 'GET',
        url: urlCourse
      }).then(function successCallback(response) {
        $scope.courses = response['data'];
        // console.lo g($scope.courses);
      }, function errorCallback(response) {
        $scope.courses = [{
          "id": 1,
          "name": "courses no found"
        }];
      });
    };

    //--------------------------------------------------------------------- ADD COURSE
    $scope.addCourse = function () {
      // console.log($scope.course);
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

    //--------------------------------------------------------------------- EDIT COURSE


    $scope.selectEditCourse = function () {

      var req = {
        method: 'GET',
        url: 'http://xook.com.gt:88/api/course/' + $scope.selectCourseEdit
      };

      $http(req)
        .then(function (response) {
            //console.log(response);
            $scope.course.name = response['data']['name'];
            $scope.course.description = response['data']['description'];
            $scope.course.category = response['data']['id_categorie'];
            $scope.course.level = response['data']['id_level'];
            $scope.course.stars = parseInt(response['data']['starts']);
            $scope.stars($scope.course.stars);
          },
          function (response) { // optional
            //console.log(response);

          });
    };

    $scope.editCourse = function () {
      var req = {
        method: 'PUT',
        url: 'http://xook.com.gt:88/api/course/' + $scope.selectCourseEdit,
        data: {
          'name': $scope.course.name,
          'description': $scope.course.description,
          'starts': parseInt($scope.course.stars),
          'id_categorie': parseInt($scope.course.category),
          'id_level':parseInt( $scope.course.level)          
        }

      };

      $http(req)

        .then(function (response) {
            toastr.success(response['data']['msj'], "Course status");
            $scope.Searchcourses();
            //console.log(data);
          },
          function (response) { // optional
            toastr.error(response['data']['msj'], "Course status");
          });
    };

    //--------------------------------------------------------------------- REMOVE   COURSE
    $scope.deleteCourse = function () {
      var req = {
        method: 'DELETE',
        url: 'http://xook.com.gt:88/api/course/' + $scope.removeCourse
      };

      $http(req)
        .then(function (response) {
            toastr.success(response['data']['msj'], "Course status");
            $scope.Searchcourses();
          },
          function (response) { // optional
            toastr.error(response['data']['msj'], "Course status");
          });
    };




  });
