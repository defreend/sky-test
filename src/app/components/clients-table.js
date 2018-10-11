'use strict';

/**
 * @ngdoc overview
 * @name SkyUpTestApp
 * @description
 * # SkyUpTestApp
 *
 * clientsTable angular.
 */

angular.module('SkyUpTestApp')
.component('clientsTable', {
  templateUrl: 'views/components/clients-table.html',
  bindings: {
    params: '<'
  },
  require: {
    parent: '^clientsInfo'
  },
  controller: function(ClientsSvc){
    var ctrl = this;
    ctrl.clients = [];

    ctrl.selectClient = function(client){
      if (client)
        ctrl.parent.setActiveClient(client)
    }

    this.$onInit = function() {
      ClientsSvc.getClients(ctrl.params).then(function(response){
        ctrl.clients = response;
      }, function(response){
        ctrl.clients = [];
        console.log("ClientsSvc. Oops something went wrong-> ", response)
      })
    };

  }
});