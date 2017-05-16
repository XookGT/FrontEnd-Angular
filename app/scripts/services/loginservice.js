'use strict';

/**
 * @ngdoc service
 * @name xookFrontApp.loginService
 * @description
 * # loginService
 * Service in the xookFrontApp.
 */




angular.module('xookFrontApp')
  .service('loginService', function ($http) {

  // variables de session
  // -- tokenLogin
  // -- userIsLogin
  // -- role


    this.cacheSession = function (key, value) { //parametros email, username, avatar
      sessionStorage.setItem(key, value);
    };

    this.getSession = function (key) {
      return sessionStorage.getItem(key);
    };

    this.unCacheSession = function (key) {
      sessionStorage.removeItem(key);
    };

    this.isLoggedIn = function () {
      return sessionStorage.getItem('userIsLogin') != null;
    };

  });
