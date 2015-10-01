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
		} )
		.state( "customers.accounts.add", {
			url : "/add",
			controller : "AccountsCustomersAddController",
			template : require( "templates/accounts/customers_add.html" ),
			resolve : {
				customerId : customerIdResolver
			}
		} )
		.state( "customers.accounts.edit", {
			url : "/:accountId/edit",
			controller : "AccountsCustomersEditController",
			template : require( "templates/accounts/customers_edit.html" ),
			resolve : {
				customerId : customerIdResolver,
				accountId : [ "$stateParams", function( $stateParams ) {
					return $stateParams.accountId;
				} ]
			}
		} );
} ];
