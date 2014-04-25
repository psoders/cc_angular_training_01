'use strict';

describe('Directive: comments/directive/comment', function () {

  // load the directive's module
  beforeEach(module('jiraAngularTrainingApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<comments/directive/comment></comments/directive/comment>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the comments/directive/comment directive');
  }));
});
