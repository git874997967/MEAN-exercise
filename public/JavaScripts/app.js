/**
 * Created by yzm on 2017/1/15.
 */
/*中括号中的 值很重要*/
//为应用定义路由
angular.module('polls', ['pollServices']).
config(['$routeProvider', function($routeProvider) {
        $routeProvider.
        when('/polls', { templateUrl: 'partials/list.html', controller: PollListCtrl }).
        when('/poll/:pollId', { templateUrl: 'partials/item.html', controller: PollItemCtrl }).
        when('/new', { templateUrl: 'partials/new.html', controller: PollNewCtrl }).
        // If invalid route, just redirect to the main list view
        otherwise({ redirectTo: '/polls' });
}]);

/*
angular.module('polls', ['pollServices']).
config(['$routeProvider', function($routeProvider) {
        $routeProvider.
        when('/polls', { templateUrl: 'partials/list.html', controller: PollListCtrl }).
        when('/poll/:pollId', { templateUrl: 'partials/item.html', controller: PollItemCtrl }).
        when('/new', { templateUrl: 'partials/new.html', controller: PollNewCtrl }).
        // If invalid route, just redirect to the main list view
        otherwise({ redirectTo: '/polls' });
}]);*/
