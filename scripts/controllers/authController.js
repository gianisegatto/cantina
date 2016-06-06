'use strict'

app.controller('AuthController', function(Auth, $location) {

	this.register = function(user) {
		Auth.register(user).then(function() {
			console.log("Register successfully!");
			$location.path('/');
		}, function(err) {
			console.log("Error on register", err);
		});
	};

	this.login = function(user) {
		Auth.login(user).then(function() {
			console.log("Logged successfully!");
			$location.path('/');
		}, function(err) {
			console.log("Error on login");
		});
	};

	this.changePassword = function(user) {
		Auth.register(user).then(function() {
			
			user.email = '';
			user.oldPassword = '';
			user.newPassword = '';

			console.log("Password changed successfully!");
		}, function(err) {
			console.log("Error on changePassword");
		});
	};

	this.logout = function(user) {
		Auth.logout().then(function() {
			console.log("Logout successfully!");
			$location.path('/');
		}, function(err) {
			console.log("Error on logout");
		});
	};

});