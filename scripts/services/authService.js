'use strict';

app.factory('Auth', function(FURL, $firebaseAuth, $firebase) {

	var database = new Firebase(FURL);
	var auth = $firebaseAuth(database);

	var Auth = {

		user: {},

		login: function(user) {
			return auth.$authWithPassword({email: user.email, password: user.password});
		},

		register: function(user) {
			return auth.$createUser({email: user.email, password: user.password})
				.then(function() {
					return Auth.login(user);
				});
		},

		logout: function() {
			auth.$unauth();
		},

		changePassword: function(user) {
			return auth.$changePassword({email: user.email, oldPassword: user.oldPassword, newPassword: user.newPassword});
		},

		signedIn: function() {
			reuturn || Auth.user.provider;
		}
	};

	auth.$onAuth(function(authData) {
		if (authData) {
			angular.copy(authData, Auth.user);
		} else {
			angular.copy({}, Auth.user);
		}
	});

	return Auth;

});