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
      .when('/issues', {
        templateUrl: 'views/issues.html',
        controller: 'IssueIssuesCtrl'
      })
      .when('/issue/:id/edit', {
        templateUrl: 'views/issues.html',
        controller: 'IssueIssuesCtrl'
      })
     .when('/comments', {
        templateUrl: 'views/comments.html',
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
      var users = [
        {
          "id": 1,
          "username": "ArekZc",
          "email": "a.zajac@clearcode.cc",
          "gender": "male",
          "displayName": "Arek Zając",
          "updated_at": "2013-09-12T06:20:31+0000",
          "created_at": "2013-09-12T06:20:31+0000"
        },
        {
          "id": 2,
          "username": "ArekZc",
          "email": "a.zajac@clearcode.cc",
          "gender": "male",
          "displayName": "Arek Zając",
          "updated_at": "2013-09-12T06:20:31+0000",
          "created_at": "2013-09-12T06:20:31+0000"
        },
        {
          "id": 3,
          "username": "ArekZc",
          "email": "a.zajac@clearcode.cc",
          "gender": "male",
          "displayName": "Arek Zając",
          "updated_at": "2013-09-12T06:20:31+0000",
          "created_at": "2013-09-12T06:20:31+0000"
        },
        {
          "id": 4,
          "username": "ArekZc",
          "email": "a.zajac@clearcode.cc",
          "gender": "male",
          "displayName": "Arek Zając",
          "updated_at": "2013-09-12T06:20:31+0000",
          "created_at": "2013-09-12T06:20:31+0000"
        }
      ];

    // returns the current list of phones
    $httpBackend.whenGET('/comments').respond(comments);
    $httpBackend.when('GET', '/users').respond(users);
    $httpBackend.when('GET', '/users/1').respond(users[0]);

    // adds a new phone to the phones array
    $httpBackend.whenPOST('/phones').respond(function(method, url, data) {
        var comment = angular.fromJson(data);
        comments.push(comment);
        return [200, comment, {}];
    });
    $httpBackend.whenGET(/^views\//).passThrough();
  });
