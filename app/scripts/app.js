'use strict';

angular
  .module('jiraAngularTrainingApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngMockE2E'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/comments', {
        templateUrl: 'views/comment/comments.html',
        controller: 'CommentsCtrl'
      })
      .when('/users/:id', {
        templateUrl: 'views/users/user.html',
        controller: 'UsersUserCtrl'
      })
      .when('/users', {
        templateUrl: 'views/users/users.html',
        controller: 'UsersUsersCtrl'
      })
      .when('/projects/project', {
        templateUrl: 'views/projects/project.html',
        controller: 'ProjectsProjectCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($httpBackend) {
    var comments = [
        {
            body: 'asd',
            createOn: 'asd'
        },
        {
            body: 'asd22',
            createOn: 'asd22'
        },
        {
            body: 'asd2233',
            createOn: 'asd2233'
        }
    ];

    // returns the current list of phones
    $httpBackend.whenGET('/comments').respond(comments);

    // adds a new phone to the phones array
    $httpBackend.whenPOST('/comments').respond(function(method, url, data) {
        var comment = angular.fromJson(data);
        comments.push(comment);
        return [200, comment, {}];
    });
    $httpBackend.whenGET(/^views\//).passThrough();
  });
