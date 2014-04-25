'use strict';

angular
  .module('jiraAngularTrainingApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/issues', {
        templateUrl: 'views/issues.html',
        controller: 'IssueIssuesCtrl'
      })
      .when('/issue/1/edit', {
        templateUrl: 'views/issues.html',
        controller: 'IssueIssuesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
