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
      .when('/issues/list', {
        templateUrl: 'views/issues/list.html',
        controller: 'IssueIssuesCtrl'
      })
      .when('/issue/:id/edit', {
        templateUrl: 'views/issues/edit.html',
        controller: 'IssueEditCtrl'
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
    
    var issuesResponse = {
        "data": [
            {
                "id": 1,
                "title": "Add new user",
                "description": "Lorem ipsum...",
                "status": "In Progress",
                "type": "Task",
                "priority": "major",
                "assignee": "Arek Zając",
                "updated_at": "2013-09-12T06:20:31+0000",
                "created_at": "2013-09-12T06:20:31+0000"
            },
            {
                "id": 2,
                "title": "Add new user",
                "description": "Lorem ipsum...",
                "status": "In Progress",
                "type": "Task",
                "priority": "major",
                "assignee": "Arek Zając",
                "updated_at": "2013-09-12T06:20:31+0000",
                "created_at": "2013-09-12T06:20:31+0000"
            },
            {
                "id": 3,
                "title": "Add new user",
                "description": "Lorem ipsum...",
                "status": "In Progress",
                "type": "Task",
                "priority": "major",
                "assignee": "Arek Zając",
                "updated_at": "2013-09-12T06:20:31+0000",
                "created_at": "2013-09-12T06:20:31+0000"
            },
        ],
        "paging": {
            "itemsCount": 1110
        }
    };

    // returns the current list of comments
    $httpBackend.whenGET('/comments').respond(comments);

    // returns the current list of phones
    $httpBackend.whenGET('/issues').respond(issuesResponse);

    // adds a new phone to the phones array
    $httpBackend.whenPOST('/phones').respond(function(method, url, data) {
        var comment = angular.fromJson(data);
        comments.push(comment);
        return [200, comment, {}];
    });

    // adds a new phone to the phones array
    $httpBackend.whenPOST('/issues/add').respond(function(method, url, data) {
        var issue = angular.fromJson(data);
        issuesResponse.push(issue);
        return [200, issuesResponse, {}];
    });
    
    $httpBackend.whenGET(/^views\//).passThrough();
  });
