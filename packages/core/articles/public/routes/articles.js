'use strict';

//Setting up route
angular.module('mean.articles').config(['$stateProvider',
  function($stateProvider) {

    // states for my app
    $stateProvider
      .state('all articles', {
        url: '/articles',
        templateUrl: '/articles/views/list.html',
        resolve: {
          loggedin: function(MeanUser) {
            return MeanUser.checkLoggedin();
          }
        }
      })
      .state('all comments', {
        url: '/comments',
        templateUrl: '/articles/views/commentslist.html',
        resolve: {
          loggedin: function(MeanUser) {
            return MeanUser.checkLoggedin();
          }
        }
      })
      .state('create article', {
        url: '/articles/create',
        templateUrl: '/articles/views/create.html',
        resolve: {
          loggedin: function(MeanUser) {
            return MeanUser.checkLoggedin();
          }
        }
      })
      .state('edit article', {
        url: '/articles/:articleId/edit',
        templateUrl: '/articles/views/edit.html',
        resolve: {
          loggedin: function(MeanUser) {
            return MeanUser.checkLoggedin();
          }
        }
      })
      .state('article by id', {
        url: '/articles/:articleId',
        templateUrl: '/articles/views/view.html',
        resolve: {
          loggedin: function(MeanUser) {
            return MeanUser.checkLoggedin();
          }
        }
      });
  }
]);
