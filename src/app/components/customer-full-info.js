'use strict';

/**
 * @ngdoc overview
 * @name SkyUpTestApp
 * @description
 * # SkyUpTestApp
 *
 * customer-full-info component.
 */

angular.module('SkyUpTestApp')
.component('customerFullInfo', {
  templateUrl: 'views/components/customer-full-info.html',
  bindings: {
    customer: '='
  },
  controller: function(CustomersSvc){
    var ctrl = this;
  }
});