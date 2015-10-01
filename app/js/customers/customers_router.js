"use strict";

/**
 * A router that registers and manages following routes:
 * - __/customers__ - index page that displays a list of registered customers
 * - __/customers/add__ - page that allows creating customers
 * - __/customers/:customerId/edit__ - page that allows updating customers
 * - __/customers/:customerId__ - page that displays details of customer
 *
 * @name CustomersRouter
 * @memberof module:Customers
 */
module.exports = [ "$stateProvider", "customerIdResolver",
	function( $stateProvider, customerIdResolver ) {
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
		} )
		.state( "customers.edit", {
			url : "/:customerId/edit",
			controller : "CustomersEditController",
			template : require( "templates/customers/edit.html" ),
			resolve : {
				customerId : customerIdResolver
			}
		} )
		.state( "customers.show", {
			url : "/:customerId",
			controller : "CustomersShowController",
			template : require( "templates/customers/show.html" ),
			resolve : {
				customerId : customerIdResolver
			}
		} );
} ];
