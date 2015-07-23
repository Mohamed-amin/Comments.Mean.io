'use strict';

// //Comments  service used for comments REST endpoint
// angular.module('mean.articles').factory('Comments', ['$resource',
//   function($resource) {
//     return $resource('api/articles/:articleId', {
//       articleId: '@_id'
//     }, {
//       update: {
//         method: 'PUT'
//       }
//     });
//   }
// ]);

angular.module('mean.articles').factory('Comments', [
  function() {
    return [{
            id: '1',
            createdAt: '20:20:20:20',
            status: 'PENDING',
            content: 'Test test test test test',
            user: 'Amin'
        }, {
            id: '1',
            createdAt: '20:20:20:20',
            status: 'PENDING',
            content: 'Test test test test test',
            user: 'Amin'
        }, {
            id: '1',
            createdAt: '20:20:20:20',
            status: 'PENDING',
            content: 'Test test test test test',
            user: 'Amin'
        }]
  }
]);
