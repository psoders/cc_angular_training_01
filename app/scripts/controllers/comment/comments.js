'use strict';

angular.module('jiraAngularTrainingApp')
  .controller('CommentsCtrl', function ($scope, $http) {
    $scope.comments = [];
    $http({method: 'GET', url: '/comments'}).
      success(function(data) {
          $scope.comments = data;
      });
  });
