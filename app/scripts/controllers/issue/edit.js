'use strict';

angular.module('jiraAngularTrainingApp')
  .controller('IssueEditCtrl', function ($scope,issues) {
    $scope.issue = {
        "id": 1,
        "title": "Add new user",
        "description": "Lorem ipsum...",
        "status": "In Progress",
        "type": "Task",
        "priority": "major",
        "assignee": "Arek Zając",
        "updated_at": "2013-09-12T06:20:31+0000",
        "created_at": "2013-09-12T06:20:31+0000"
    }
    
    $scope.submitEdittedIssue = function(data) {
        console.log(issues);
        issues.post();
    }
    
  });
