"use strict";

var angular = require( "angular" );
var _ = require( "lodash" );

/**
 * Implements transactions controller that handles transactions index page
 * for requested account.
 *
 * @class TransactionsIndexController
 * @memberof module:Transactions
 */
var TransactionsIndexController = function( $scope, Transactions, AccountResolver ) {
	$scope.account = AccountResolver();
	var accountId = $scope.account.id;
	var currency = $scope.account.currency;
	var amountTransforms = {
		deposit : function( amount ) { return currency + amount; },
		withdraw : function( amount ) { return "-" + currency + amount; }
	};

	/**
	 * Returns formatted amount for the given transaction.
	 *
	 * @inner
	 * @function getTransactionAmount
	 * @memberof module:Transactions.TransactionsIndexController
	 */
	$scope.getTransactionAmount = function( transaction ) {
		return amountTransforms[ transaction.action ]( transaction.amount );
	};

	$scope.transactions = _.where( Transactions, { accountId : accountId } )
		.map( function( transaction ) {
			return {
				accountId : accountId,
				created : new Date( transaction.created ),
				amount : $scope.getTransactionAmount( transaction )
			};
		} );
};

module.exports = [ "$scope", "Transactions", "AccountResolver", TransactionsIndexController ];
