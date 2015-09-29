"use strict";

/**
 * A router that registers and manages following routes:
 * - __/customers__ - index page that displays a list of registered customers
 *
 * @name CustomersRouter
 * @memberof module:Customers
 */
module.exports = [ "$stateProvider", function( $stateProvider ) {
	$stateProvider
		.state( "customers", {
			url : "/customers",
			views : {
				main : {
					template : require( "templates/customers/index.html" ),
					controller : "CustomersIndexController"
				}
			}
		} );
} ];
