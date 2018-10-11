'use strict';

/**
 * @ngdoc overview
 * @name SkyUpTestApp
 * @description
 * # SkyUpTestApp
 *
 * Main module of the application.
 */

angular
.module('SkyUpTestApp', ['ui.router'])
.run(function() {
  console.info("SkyUpTestApp Run");
})
.config(function( $qProvider) {
  $qProvider.errorOnUnhandledRejections(false);
})
.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider
    .when('/', '/app/clients')
    .otherwise('/app/clients');
  $stateProvider
    .state('root', {
      abstract: true,
      template: '<div ui-view="header"></div><div ui-view="content"></div><div ui-view="footer"></div>'
    })
    .state('root.app', {
      abstract: true,
      url: '/app',
      views: {
        'header': {
          templateUrl: 'views/header.html'
        },
        'content': {
          template: '<div ui-view></div>'
        }
      }
    })
    .state('root.app.clients', {
      url: '/clients',
      templateUrl: 'views/clients.html',
      controller: 'ClientsCtrl'
    })
});