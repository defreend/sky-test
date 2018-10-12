'use strict';

/**
 * @ngdoc overview
 * @name SkyUpTestApp
 * @description
 * # SkyUpTestApp
 *
 * Customers service.
 */
 
angular.module('SkyUpTestApp')
.service('CustomersSvc', function($http, $q) {
  
  var url = 'https://randomuser.me/api/';

  var _default_params = {
    inc: 'gender, name, picture, location, email, phone, cell, nat, login, dob',
    nat: 'FR',
    results: 10
  };

  return {
    getCustomers: function(params) {

      var deferred = $q.defer();
      var parameters = (!params ? _default_params : params);

      $http({
        method: 'GET', 
        url: url,
        params: parameters
      }).then(function(result) {
        
        try { 
          var data = result.data.results
        } catch(e) { 
          deferred.reject(e);
        }

        deferred.resolve(data);
      }, function(result) {
        console.log("response error->", result);
        deferred.reject(result);
      });

      return deferred.promise;
    }
  };
});