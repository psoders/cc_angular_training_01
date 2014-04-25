'use strict';

angular.module('jiraAngularTrainingApp')
  .controller('CommentsCtrl', function ($scope, $http) {
    $http({method: 'GET', url: '/comments'}).
        success(function(data) {
            $scope.comments = data;
        });
  });
