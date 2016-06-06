'use strict'

app.controller('ProductController', function(FURL, $firebase, $location, $routeParams, $scope) {

	var database = new Firebase(FURL);
	
	this.products = $firebase(database.child('products')).$asArray();

	this.productId = $routeParams.productId;

	this.selectedProduct = {};

	if (this.productId) {
		this.selectedProduct = getProductById(this.productId);
	}

	this.post = function(product) {
		this.products.$add(product);
		$location.path('/browseproduct');
	}

	function getProductById(productId) {
		return $firebase(database.child('products').child(productId)).$asObject();
	}

	this.put = function(product) {
		this.selectedProduct.$save(product);
		$location.path('/browseproduct');
	}

	$scope.delete = function(productId) {

		var ref= new Firebase(FURL + '/products');		
		ref.child(productId).remove(function(error){
		    if (error) {
		    console.log("Error:", error);
		  } else {
		    console.log("Removed successfully!");
		  }
		});

		$location.path('/browseproduct');
	}

});