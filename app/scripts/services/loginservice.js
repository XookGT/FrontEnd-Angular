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


    this.IsAdmin = function () {
      //console.log(sessionStorage.getItem('role'));
      return sessionStorage.getItem('role') == 'admin';
    };

    this.IsTutor = function () {
      //console.log(loginService.getSession('role'));
      return sessionStorage.getItem('role') == 'tutor';
    };

    this.IsUser = function () {
      //console.log(loginService.getSession('role'));
      return sessionStorage.getItem('role') == 'user';
    };

    this.isLoggedIn = function () {
      return sessionStorage.getItem('userIsLogin') != null;
    };
    //--------------------------------------------------------------------------- PERMISSION USERS URLs
    this.permissionAdmin = function (path) {
      switch (path) {
        case '/':
          return true;
        case '/categories':
          return true;
        case '/levels':
          return true;
        case '/courses':
          return true;
        case '/province':
          return true;
        case '/country':
          return true;
        default:
          return false;
      }
    };

    this.permissionTutor = function (path) {
      switch (path) {
        case '/profile':
          return true;
        default:
          return false;
      }
    };

    this.permissionUsers = function (path) {
      switch (path) {
        case '/profile':
          return true;
        default:
          return false;
      }
    };

    this.permission = function (path) {
      if (this.IsAdmin())
        return this.permissionAdmin(path);
      else if (this.IsTutor())
        return this.permissionTutor(path);
      else
        return this.permissionUsers(path);
    };

  });
