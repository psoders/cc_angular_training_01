'use strict';

angular.module('jiraAngularTrainingApp')
  .controller('CommentsCommentsCtrl', function ($scope, $http) {
    $scope.comments = [];
    $http({method: 'GET', url: '/comments'}).
      success(function(data) {
          $scope.comments = data;
      });
  });
