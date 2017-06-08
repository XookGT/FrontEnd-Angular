'use strict';

describe('Controller: ProvinceCtrl', function () {

  // load the controller's module
  beforeEach(module('xookFrontApp'));

  var ProvinceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProvinceCtrl = $controller('ProvinceCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProvinceCtrl.awesomeThings.length).toBe(3);
  });
});
