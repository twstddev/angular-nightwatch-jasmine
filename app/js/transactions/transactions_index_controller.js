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
	var account = AccountResolver();
	var currency = account.currency;
	var amountTransforms = {
		deposit : function( amount ) { return currency + amount; },
		withdraw : function( amount ) { return "-" + currency + amount; }
	};

	$scope.transactions = _.where( Transactions, { accountId : account.id } );

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
};

module.exports = [ "$scope", "Transactions", "AccountResolver", TransactionsIndexController ];
