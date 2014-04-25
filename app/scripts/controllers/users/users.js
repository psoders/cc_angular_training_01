'use strict';

angular.module('jiraAngularTrainingApp')
  .controller('UsersUsersCtrl', function ($scope) {
    $scope.users = [
        {
            "id": 1,
            "username": "ArekZc",
            "email": "a.zajac@clearcode.cc",
            "gender": "male",
            "displayName": "Arek Zając",
            "updated_at": "2013-09-12T06:20:31+0000",
            "created_at": "2013-09-12T06:20:31+0000"
        }
    ];
    $scope.itemsCount = 1110;
  });
