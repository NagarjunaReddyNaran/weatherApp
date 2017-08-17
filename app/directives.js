

/* Directives */
var directive = angular.module('directives', []);

directive.directive('myDirective', function() {
  return {
    template: 'Name: {{customer.name}} Address: {{customer.address}}'
  };
});