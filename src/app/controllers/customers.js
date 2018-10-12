'use strict';

/**
 * @ngdoc function
 * @name SkyUpTestApp.controller:CustomersCtrl
 * @description
 * # CustomersCtrl
 * Controller of the SkyUpTestApp
 */
angular.module('SkyUpTestApp').controller('CustomersCtrl',
  function ($scope) {

    $scope.customers_params = {
      inc: 'gender, name, picture, location, email, phone, cell, nat, login, dob',
      nat: 'FR',
      results: 20
    };
  }
);