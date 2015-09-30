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
			abstract : true,
			url : "/customers",
			views : {
				main : {
					template : "<ui-view/>"
				}
			}
		} )
		.state( "customers.list", {
			url : "",
			controller : "CustomersIndexController",
			template : require( "templates/customers/index.html" ),
		} )
		.state( "customers.add", {
			url : "/add",
			controller : "CustomersAddController",
			template : require( "templates/customers/add.html" )
		} );
} ];
