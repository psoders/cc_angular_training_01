'use strict';

angular.module('jiraAngularTrainingApp')
  .controller('UsersUserCtrl', function ($scope, $http) {
    $http({method: 'GET', url: '/users/1'}).
        success(function(data) {
            $scope.user = data;
        });
  });
