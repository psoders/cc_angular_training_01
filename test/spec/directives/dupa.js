'use strict';

describe('Directive: dupa', function () {

  // load the directive's module
  beforeEach(module('jiraAngularTrainingApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dupa></dupa>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dupa directive');
  }));
});
