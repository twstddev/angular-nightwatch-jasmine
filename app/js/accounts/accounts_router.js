"use strict";

/**
 * A router that registers and manages following routes:
 * - __/customers/:customerId/accounts__ - index page containing accounts for the given customer
 *
 * @name AccountsRouter
 * @memberof module:Accounts
 */
module.exports = [ "$stateProvider", function( $stateProvider ) {
	$stateProvider
		.state( "customers.accounts", {
			abstract : true,
			url : "/:customerId/accounts",
			template : "<ui-view/>",
			data : {
				level : "customers"
			}
		} )
		.state( "customers.accounts.list", {
			url : "",
			controller : "AccountsCustomersIndexController",
			template : require( "templates/accounts/customers_index.html" )
		} )
		.state( "customers.accounts.add", {
			url : "/add",
			controller : "AccountsCustomersAddController",
			template : require( "templates/accounts/customers_add.html" )
		} )
		.state( "customers.accounts.edit", {
			url : "/:accountId/edit",
			controller : "AccountsCustomersEditController",
			template : require( "templates/accounts/customers_edit.html" ),
		} )
		.state( "accounts", {
			url : "/accounts",
			data : {
				level : "accounts"
			},
			views : {
				main : {
					template : require( "templates/accounts/index.html" ),
					controller : "AccountsIndexController"
				}
			}
		} );
} ];
