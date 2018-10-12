'use strict';

/**
 * @ngdoc overview
 * @name SkyUpTestApp
 * @description
 * # SkyUpTestApp
 *
 * customersInfo component.
 */

angular.module('SkyUpTestApp')
.component('customersInfo', {
  controller: function(){
    var ctrl = this;

    ctrl.setActiveCustomer = function(customer) {
      ctrl.customer = customer;
    }

  },
  templateUrl: 'views/components/customers-info.html'
});