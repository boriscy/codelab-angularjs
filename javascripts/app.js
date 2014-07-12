'use strict';

var app = angular.module('codelab', []);

app.controller('MasterController', function($scope) {
  $scope.name = 'Violeta';

  $scope.items = [
    {id: 1, name: 'Carne de res', price: 35.5, unit: 'Kg.'},
    {id: 2, name: 'Vaso de vidrio', price: 10, unit: 'Un.'},
    {id: 3, name: 'Portafolio', price: 150, unit: 'Un.'},
    {id: 4, name: 'Tijera', price: 50.5, unit: 'Un.'},
    {id: 5, name: 'Cable de red', price: 70.5, unit: 'Un.'},
    {id: 6, name: 'Tasa', price: 20.5, unit: 'Un.'},
    {id: 7, name: 'Pelota', price: 205.0, unit: 'Un.'}
  ];
});
