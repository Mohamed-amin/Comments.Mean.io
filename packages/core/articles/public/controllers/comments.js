'use strict';

angular.module('mean.articles').controller('CommentsController', ['$scope', '$stateParams', '$location', 'Global', 'Comments',
  function($scope, $stateParams, $location, Global, Comments) {
    $scope.comments = Comments;
    console.log(Comments)
    $scope.create = function(isValid) {
      if (isValid) {
        console.log('Sending the Comment the API')
      } else {
        $scope.submitted = true;
      }
    };
  }
]);