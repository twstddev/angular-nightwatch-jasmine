"use strict";

/**
 * A router that registers __/login__ route in the application.
 *
 * @name LoginRouter
 * @memberof module:Authentication
 */
module.exports = [ "$stateProvider", function( $stateProvider ) {
	$stateProvider
		.state( "default", {
			url : "",
			redirectTo : "login"
		} )
		.state( "login", {
			url : "/login",
			views : {
				document : {
					template : require( "templates/authentication/login.html" ),
					controller : "LoginController"
				}
			}
		} );
} ];
