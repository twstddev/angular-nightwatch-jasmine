"use strict";

/**
 * Implements login controller that handles login form details
 * and passes login request to the authentication service.
 *
 * @class LoginController
 * @memberof module:Authentication
 */
var LoginController = function( $scope, $state, AuthenticationService, config ) {
	/**
	 * Checks if login details are valid and performs redirect to default route.
	 *
	 * @inner
	 * @function login
	 * @memberof module:Authentication.LoginController
	 */
	$scope.login = function() {
		var authenticationResult = AuthenticationService.authenticate( {
			username : $scope.username,
			password : $scope.password
		} );

		if( $scope.form.$invalid ) {
			return;
		}

		if ( authenticationResult ) {
			$state.go( config.roles[ AuthenticationService.user.role ].default_state );
		}
		else {
			$scope.error = "Invalid credentials";
		}
	};
};

module.exports = [
	"$scope",
	"$state",
	"AuthenticationService",
	"ApplicationConfig",
	LoginController ];
