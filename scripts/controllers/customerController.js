'use strict'

app.controller('CustomerController', function(FURL, $firebase, $location, $routeParams) {

	var database = new Firebase(FURL);
	
	this.customers = $firebase(database.child('customers')).$asArray();

	this.customerId = $routeParams.customerId;

	this.selectedCustomer = {};

	if (this.customerId) {
		this.selectedCustomer = getProductById(this.customerId);
	}

	this.post = function(customer) {
		customer.createDate = new Date();
		alert(customer.createDate);
		this.customers.$add(customer);
		$location.path('/browsecustomer');
	}

	function getProductById(customerId) {
		return $firebase(database.child('customers').child(customerId)).$asObject();
	}

	this.put = function(customer) {
		customer.updateDate = new Date();
		this.selectedCustomer.$save(customer);
		$location.path('/browsecustomer');
	}

});