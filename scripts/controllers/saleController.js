'use strict'

app.controller('SaleController', function(FURL, $firebase, $location, $routeParams) {

	var database = new Firebase(FURL);
	
	this.sales = $firebase(database.child('sales')).$asArray();

	this.products = $firebase(database.child('products')).$asArray();

	this.customers = $firebase(database.child('customers')).$asArray();

	this.items = [];

	this.customer = {};

	this.addItem = function(product) {
		console.log('Adicionando', product);
		this.items.push(product);
		console.log('Tamanho: ', this.items.length);
	}

	this.removeItem = function(product) {
		var index = this.items.indexOf(product);
  		this.items.splice(index, 1); 
	}

	this.selectCustomer = function(customer) {
		this.customer = customer;
	}

	this.post = function() {

		var sale = {};
		sale.customer = this.customer;
		sale.items = this.items;

		console.log("Venda", sale);

		//this.sales.$add(sale);
	}
});