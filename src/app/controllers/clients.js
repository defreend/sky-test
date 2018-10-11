'use strict';

/**
 * @ngdoc function
 * @name SkyUpTestApp.controller:FormCtrl
 * @description
 * # FormCtrl
 * Controller of the SkyUpTestApp
 */
angular.module('SkyUpTestApp').controller('ClientsCtrl',
  function ($scope) {

    $scope.clients_params = {
      inc: 'gender, name, picture, location, email, phone, cell, nat, login, dob',
      nat: 'FR',
      results: 20
    };
  }
);