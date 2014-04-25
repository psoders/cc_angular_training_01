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
        templateUrl: 'views/comments.html',
        controller: 'CommentsCtrl'
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
    $httpBackend.whenPOST('/phones').respond(function(method, url, data) {
        var comment = angular.fromJson(data);
        comments.push(comment);
        return [200, comment, {}];
    });
    $httpBackend.whenGET(/^views\//).passThrough();
  });
