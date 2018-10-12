'use strict';

/**
 * @ngdoc overview
 * @name SkyUpTestApp
 * @description
 * # SkyUpTestApp
 *
 * customers-list component.
 */

angular.module('SkyUpTestApp')
.component('customersList', {
  templateUrl: 'views/components/customers-list.html',
  bindings: {
    params: '<'
  },
  require: {
    parent: '^customersInfo'
  },
  controller: function(CustomersSvc){
    var ctrl = this;
    ctrl.customers = [];

    ctrl.selectCustomer = function(customer){
      if (customer)
        ctrl.parent.setActiveCustomer(customer)
    }

    this.$onInit = function() {
      CustomersSvc.getCustomers(ctrl.params).then(function(response){
        ctrl.customers = response;
      }, function(response){
        ctrl.customers = [];
        console.log("CustomersSvc. Oops something went wrong-> ", response)
      })
    };

  }
});