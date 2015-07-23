'use strict';

angular.module('mean.articles').controller('CommentsController', ['$scope', '$stateParams', '$location', 'Global', 'Comments',
  function($scope, $stateParams, $location, Global, Comments) {
    $scope.comments = Comments.getPosts('APPROVED');
    $scope.collapseAddComment = false;
    $scope.create = function(commentContent) {
      console.info('Sending the Comment the API', commentContent)
    };
  }
]);