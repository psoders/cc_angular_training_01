'use strict';

angular.module('jiraAngularTrainingApp')
  .directive('comment', function ($http) {
    return {
      template:
          '<form ng-submit="submit()">' +
              '<p>Add comment:</p>' +
              '<textarea ng-model="comment"></textarea>' +
              '<input type="submit" id="submit" value="Submit" />' +
          '</form>',
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        scope.submit = function() {
            var comment = {
                body: scope.comment,
                createdOn: new Date()
            };

            $http.post('/comments', comment);

            scope.comments.push(comment);
        }
      }
    };
  });
