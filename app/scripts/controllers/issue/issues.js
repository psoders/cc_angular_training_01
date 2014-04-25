'use strict';

angular.module('jiraAngularTrainingApp')
  .controller('IssueIssuesCtrl', function ($scope) {
    $scope.issues = {
        first: {
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
        second: {
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
        third: {
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
    };
  });
