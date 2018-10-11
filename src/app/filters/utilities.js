'use strict';

/**
 * @ngdoc overview
 * @name SkyUpTestApp
 * @description
 * # SkyUpTestApp
 *
 * Common filters of the application.
 */

angular.module('SkyUpTestApp')
.filter('fullName', function () {
  return function(name){
    if (name){

      var title = _.get(name, 'title', '');
      var first = _.get(name, 'first', '');
      var last = _.get(name, 'last', '');

      var full_name = title + ' ' + first + ' ' + last;
      full_name = full_name.replace(/\s+/g,' ')
      full_name = $.trim(full_name);

      return full_name;
    }
    else 
      return '';
  }
})