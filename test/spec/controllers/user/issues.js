'use strict';

describe('Controller: UserIssuesCtrl', function () {

  // load the controller's module
  beforeEach(module('jiraAngularTrainingApp'));

  var UserIssuesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserIssuesCtrl = $controller('UserIssuesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
