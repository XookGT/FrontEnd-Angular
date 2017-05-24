'use strict';

/**
 * @ngdoc function
 * @name xookFrontApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the xookFrontApp
 */
angular.module('xookFrontApp')
  .controller('ProfileCtrl', function ($scope, $http, toastr) {
    
    $scope.menuTemplate = {
      url: 'views/menu.html'
    };

  });
