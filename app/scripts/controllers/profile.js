'use strict';

/**
 * @ngdoc function
 * @name xookFrontApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the xookFrontApp
 */
angular.module('xookFrontApp')
  .directive('ngFiles', ['$parse', function ($parse) {

    function fn_link(scope, element, attrs) {
      var onChange = $parse(attrs.ngFiles);
      element.on('change', function (event) {
        onChange(scope, {
          $files: event.target.files
        });
      });
    };

    return {
      link: fn_link
    }
  }])
  .controller('ProfileCtrl', function ($scope, $http, toastr) {
    $scope.myDate = new Date();
    $scope.load = false;

    $scope.menuTemplate = {
      url: 'views/menu.html'
    };

    $scope.user = {
      name: '',
      lastname: '',
      tel1: '',
      date: '',
      cui: ''
    };

    //****************************************************************************** */
    //                                   METHOD INIT
    //
    //****************************************************************************** */

    $scope.init = function () {
      if (sessionStorage.getItem('emailUser') != null) {
        var req = {
          method: 'GET',
          url: 'http://xook.com.gt:88/api/user/' + sessionStorage.getItem('emailUser')
        };

        $http(req)
          .then(function (response) { //if status is success
              console.log(response);
              $scope.user.name = response['data']['name'];
              $scope.user.lastname = response['data']['lastname'];
              $scope.user.tel1 = response['data']['celphone'];
              // console.log("data bd "+response['data']['birthdate']);
              // var from = response['data']['birthdate'].split("-");
              // var day= from[2].split(" ");
              // console.log(from);
              // var f = new Date(from[0], from[1] - 1, day[0]).toJSON().slice(0,10);
              $scope.user.date = new Date(response['data']['birthdate']);
              // console.log(f);

              $scope.user.cui = response['data']['dni'];
              //toastr.success(response['data']['msj'] + " " + sessionStorage.getItem('emailUser'), "get status");
              //$location.path('/');
            },
            function (response) { // if error
              console.log(response);
              toastr.error(response['data']['Error'], "get status");
            });
      }
    };

    $scope.updateInfo = function () {
      $scope.user.date = $scope.user.date.toJSON().slice(0, 10);
      $scope.load = true;
      if (sessionStorage.getItem('emailUser') != null) {
        var req = {
          method: 'PUT',
          url: 'http://xook.com.gt:88/api/user/' + sessionStorage.getItem('emailUser'),
          data: {
            'name': $scope.user.name,
            'lastname': $scope.user.lastname,
            'email': '',
            'password': '',
            'celphone': $scope.user.tel1,
            'celphone2': '',
            'url_crimina_record': '',
            'birthdate': $scope.user.date,
            'dni': $scope.user.cui,
            'dni_pdf': '',
            'url_cv': '',
            'id_profile_status': '1',
            'super': ''

          }
        };

        $http(req)
          .then(function (response) { //if status is success
              $scope.load = false; //this is variable that hide the progress bar

              console.log(response);
              toastr.success(response['data']['msj'] + " " + sessionStorage.getItem('emailUser'), "Update status");
              //$location.path('/');
            },
            function (response) { // if error
              $scope.load = false;
              console.log(response);
              var oldString = $scope.user.date.toString();
              var str = oldString.replace(/T/g, " ");
              $scope.newString = str;
              toastr.success($scope.newString, "asdfadsf");
              toastr.error(response['data']['Error'], "Update status");
            });

      } else {
        toastr.error('Please login', "Update status");
      };


    };
    //******************************************************************************************** */
    //                                  UPLOAD FILE
    //
    //  THIS SECTION 
    //******************************************************************************************** */

    var formdata = new FormData();
    var file;
    $scope.getTheFiles = function ($files) {
      angular.forEach($files, function (value, key) {
        formdata.append(key, value);
        //console.log(value);
        file=value;
      });
    };

    // NOW UPLOAD THE FILES.
    $scope.uploadFiles = function () {
      console.log(formdata);
      var request = {
        method: 'POST',
        url: 'http://xook.com.gt:88/api/user/dni/'+ sessionStorage.getItem('emailUser'),
        data:{
          'dpi': file
        }
        
      };

      // SEND THE FILES.
      $http(request).then(function (response) {
              console.log(response);
            },
            function (response) { // optional
              console.log('error--');
               console.log(response);
            });
    }
  });
