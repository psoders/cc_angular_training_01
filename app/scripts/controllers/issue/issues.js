'use strict';

angular.module('jiraAngularTrainingApp')
  .controller('IssueIssuesCtrl', function ($scope,issues) {
        $scope.issues = [];

       issues.get().$promise.then(function(data){
           $scope.issues = data.data;
       });

    }
  );
