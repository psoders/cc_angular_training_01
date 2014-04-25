'use strict';

describe('Controller: ProjectsProjectCtrl', function () {

  // load the controller's module
  beforeEach(module('jiraAngularTrainingApp'));

  var ProjectsProjectCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjectsProjectCtrl = $controller('ProjectsProjectCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
