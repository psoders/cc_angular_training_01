'use strict';

describe('Controller: UsersIdCtrl', function () {

  // load the controller's module
  beforeEach(module('jiraAngularTrainingApp'));

  var UsersIdCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsersIdCtrl = $controller('UsersIdCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
