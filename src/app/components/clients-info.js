'use strict';

/**
 * @ngdoc overview
 * @name SkyUpTestApp
 * @description
 * # SkyUpTestApp
 *
 * clientsInfo component.
 */

angular.module('SkyUpTestApp')
.component('clientsInfo', {
  controller: function(ClientsSvc){
    var ctrl = this;

    ctrl.setActiveClient = function(client) {
      ctrl.client = client;
    }

  },
  templateUrl: 'views/components/clients-info.html'
});