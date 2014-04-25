'use strict';

angular.module('jiraAngularTrainingApp')
  .controller('ProjectsProjectCtrl', function ($scope) {
    $scope.project = {
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
    };
  });
