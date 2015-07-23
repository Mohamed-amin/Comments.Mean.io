'use strict';

angular.module('mean.articles').controller('CommentsController', ['$scope', '$stateParams', '$location', 'Global', 'Comments',
  function($scope, $stateParams, $location, Global, Comments) {
    $scope.comments = Comments;
    console.log(Comments)
  }
]);