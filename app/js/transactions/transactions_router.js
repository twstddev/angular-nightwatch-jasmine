"use strict";

/**
 * A router that registers and manages following routes:
 * - __/account/:accountId/transactions - index page containing transactions for the given account
 *
 * @name TransactionsRouter
 * @memberof module:Transactions
 */
module.exports = [ "$stateProvider", function( $stateProvider ) {
	$stateProvider
		.state( "transactions", {
			url : "/accounts/:accountId/transactions",
			views : {
				main : {
					template : require( "templates/transactions/index.html" ),
					controller : "TransactionsIndexController"
				}
			}
		} );
} ];
