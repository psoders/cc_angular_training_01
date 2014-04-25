'use strict';

angular.module('jiraAngularTrainingApp')
  .controller('ProjectsProjectsCtrl', function ($scope) {
    $scope.projects = [
        {
            "id": 1,
            "key": "PROJ",
            "name": "Project",
            "leader": {
              "id": 1,
              "username": "ArekZc",
              "email": "a.zajac@clearcode.cc",
              "gender": "male",
              "displayName": "Arek Zając",
              "updated_at": "2013-09-12T06:20:31+0000",
              "created_at": "2013-09-12T06:20:31+0000"
            },
            "url": "project.com",
            "updated_at": "2013-09-12T06:20:31+0000",
            "created_at": "2013-09-12T06:20:31+0000"
        },
        {
            "id": 2,
            "key": "PROJ",
            "name": "Project",
            "leader": {
              "id": 1,
              "username": "ArekZc",
              "email": "a.zajac@clearcode.cc",
              "gender": "male",
              "displayName": "Arek Zając",
              "updated_at": "2013-09-12T06:20:31+0000",
              "created_at": "2013-09-12T06:20:31+0000"
            },
            "url": "project.com",
            "updated_at": "2013-09-12T06:20:31+0000",
            "created_at": "2013-09-12T06:20:31+0000"
        },
        {
            "id": 3,
            "key": "PROJ",
            "name": "Project",
            "leader": {
              "id": 1,
              "username": "ArekZc",
              "email": "a.zajac@clearcode.cc",
              "gender": "male",
              "displayName": "Arek Zając",
              "updated_at": "2013-09-12T06:20:31+0000",
              "created_at": "2013-09-12T06:20:31+0000"
            },
            "url": "project.com",
            "updated_at": "2013-09-12T06:20:31+0000",
            "created_at": "2013-09-12T06:20:31+0000"
        }
    ];
  });
