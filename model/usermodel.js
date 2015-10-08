"use strict";
var myApp = angular.module('myApp', ["ngRoute", "ui.bootstrap", "angularUtils.directives.dirPagination"]);
myApp.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/', {
            templateUrl: 'view/mainview.html',
            controller: 'MyCtrl'
        }).
        when('/view1', {
            templateUrl: 'view/view1.html',
            controller: 'View1Controller'
        }).
        when('/view2', {
            templateUrl: 'view/view2.html',
            controller: 'View2Controller'
        }).
        when('/mainview', {
            templateUrl: 'view/mainview.html',
            controller: 'MyCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
  }]);