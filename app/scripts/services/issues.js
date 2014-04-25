'use strict';

angular.module('jiraAngularTrainingApp')
  .factory('issues', function ($resource) {
      return $resource('/issues/',{},{
          
      })
  });
