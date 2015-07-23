'use strict';
/**
* Mocking for comments retrieving service 
*/
angular.module('mean.articles').factory('Comments', [
    function() {
        var Comments = this;
        Comments.getPosts = function(status) {
            if ( status === 'PENDING') {
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
            } else if ( status === 'APPROVED') {
            	return [{
		            id: '1',
		            createdAt: '20:20:20:20',
		            status: 'APPROVED',
		            content: 'Test test test test test',
		            user: 'Amin'
		        }, {
		            id: '1',
		            createdAt: '20:20:20:20',
		            status: 'APPROVED',
		            content: 'Test test test test test',
		            user: 'Amin'
		        }, {
		            id: '1',
		            createdAt: '20:20:20:20',
		            status: 'APPROVED',
		            content: 'Test test test test test',
		            user: 'Amin'
		        }]
            }
        };
        
    }
]);
