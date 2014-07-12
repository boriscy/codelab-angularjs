var app = angular.module('codelab', []);
"use strict";

app.controller('MasterController', function($scope) {
  $scope.products = [];

  // Calcula el total iterando los productos y sumandolos
  $scope.total = function() {
    sum = 0;
    angular.forEach($scope.products, function(prod) {
      sum += prod.price * prod.quantity;
    });

    return sum;
  };

  // Busca un ítem en la lista
  findItem = function(id) {
    var items = $scope.items.filter(function(it) { return it.id === id; });
    console.log(items);
    return items[0];
  };

  // Adiciona un nuevo producto a la lista de productos
  $scope.addNew = function() {
    // Definimos un nuevo producto usando la función $scope.$new
    // debido a que nos proporciona métodos que necesitaremos
    var prod = $scope.$new();

    prod.quantity = 1;
    // Observamos si se cambia el item
    prod.$watch('item', function(newVal, oldVal) {
      // Si el item es diferente entonces ponemos precio y detalles
      if(angular.isNumber(newVal)) {
        var item = findItem(newVal);

        prod.id = item.id;
        prod.price = item.price;
        prod.name = item.name;
        prod.unit = item.unit;
        prod.price = item.price;
      }
    });
    $scope.products.push(prod);
  };


  // Elimina un producto del array de productos
  $scope.del = function(prod, index) {
    $scope.products.splice(index, 1);
    prod.$destroy();
  };

  // Presenta en este caso salva los productos
  $scope.save = function() {
    var prods = $scope.products.map(function(p) {
      return {id: p.id, nombre: p.name, precio: p.price, cantidad: p.quantity};
    });
    $scope.text = prods;
  };

  // Lista de items
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
