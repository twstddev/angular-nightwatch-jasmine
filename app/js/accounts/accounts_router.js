"use strict";

/**
 * A router that registers and manages following routes:
 * - __/customers/:customerId/accounts__ - index page containing accounts for the given customer
 *
 * @name AccountsRouter
 * @memberof module:Accounts
 */
module.exports = [ "$stateProvider", "customerIdResolver",
	function( $stateProvider, customerIdResolver ) {
	$stateProvider
		.state( "customers.accounts", {
			abstract : true,
			url : "/:customerId/accounts",
			template : "<ui-view/>"
		} )
		.state( "customers.accounts.list", {
			url : "",
			controller : "AccountsCustomersIndexController",
			template : require( "templates/accounts/customers_index.html" ),
			resolve : {
				customerId : customerIdResolver
			}
		} );
} ];
