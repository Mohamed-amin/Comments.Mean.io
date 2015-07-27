'use strict';

angular.module('mean.articles').controller('ArticlesController', ['$scope', '$stateParams', '$location', '$timeout', 'Global', 'Articles', 'MeanUser', 'Circles',
    function($scope, $stateParams, $location, $timeout, Global, Articles, MeanUser, Circles) {
        $scope.global = Global;
        $scope.hasAuthorization = function(article) {
            if (!article || !article.user) return false;
            return MeanUser.isAdmin || article.user._id === MeanUser.user._id;
        };

        $scope.availableCircles = [];
        $scope.MeanUser = MeanUser;

        Circles.mine(function(acl) {
            $scope.availableCircles = acl.allowed;
            $scope.allDescendants = acl.descendants;
        });

        $scope.showDescendants = function(permission) {
            var temp = $('.ui-select-container .btn-primary').text().split(' ');
            temp.shift(); //remove close icon
            var selected = temp.join(' ');
            $scope.descendants = $scope.allDescendants[selected];
        };

        $scope.selectPermission = function() {
            $scope.descendants = [];
        };

        $scope.create = function(isValid) {
            if (isValid) {
                // $scope.article.permissions.push('test test');
                var article = new Articles($scope.article);

                article.$save(function(response) {
                    $location.path('articles/' + response._id);
                });

                $scope.article = {};

            } else {
                $scope.submitted = true;
            }
        };

        $scope.remove = function(article) {
            if (article) {
                article.$remove(function(response) {
                    for (var i in $scope.articles) {
                        if ($scope.articles[i] === article) {
                            $scope.articles.splice(i, 1);
                        }
                    }
                    $location.path('articles');
                });
            } else {
                $scope.article.$remove(function(response) {
                    $location.path('articles');
                });
            }
        };

        $scope.update = function(isValid) {
            if (isValid) {
                var article = $scope.article;
                if (!article.updated) {
                    article.updated = [];
                }
                article.updated.push(new Date().getTime());

                article.$update(function() {
                    $location.path('articles/' + article._id);
                });
            } else {
                $scope.submitted = true;
            }
        };

        $scope.find = function() {
            Articles.query(function(articles) {
                $scope.articles = articles;

            });
        };

        $scope.findOne = function() {
            Articles.get({
                articleId: $stateParams.articleId
            }, function(article) {
                $scope.article = article;
            });
        };

        $scope.saveComment = function() {
            var article = $scope.article;
            if (!article.updated) {
                article.updated = [];
            }
            var newComment = {
                content: $scope.newComment.content,
                user: MeanUser.user.name,
                status: 'PENDING'
            }
            $scope.article.comments.push(newComment)
            article.updated.push(new Date().getTime());
            article.$update(function() {
                $scope.saved = true;
                $timeout(function() {
                    $scope.saved = false
                }, 3000);
            });

        };
        $scope.approveComment = function(article, comment) {
            if (comment) {
                _.map(article.comments, function(cm) {
                    if (comment.$$hashKey === cm.$$hashKey) {
                        comment.status = 'APPROVED';
                    }
                });

                if (!article.updated) {
                    article.updated = [];
                }
                article.updated.push(new Date().getTime());
                article.$update();
            }
        };
        $scope.removeComment = function(article, comment) {
            if (comment) {
                _.remove(article.comments, function(cm) {
                    return comment.$$hashKey === cm.$$hashKey;
                });

                if (!article.updated) {
                    article.updated = [];
                }
                article.updated.push(new Date().getTime());
                article.$update();
            }
        };

    }
]);
