'use strict';

angular.module('jiraAngularTrainingApp')
  .controller('UsersUsersCtrl', function ($scope, $http) {
    $http({method: 'GET', url: '/users'}).
        success(function(data) {
            $scope.users = data;
        });
    $scope.itemsCount = 1110;
  });
