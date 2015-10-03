"use strict";

/**
 * Implements simple transactions resource wrapper around
 * localStorage value.
 *
 * @name Transactions
 * @memberof module:Transactions
 */
module.exports = [ "$localStorage", function( $localStorage ) {
	$localStorage.transactions = $localStorage.transactions || [];

	return $localStorage.transactions;
} ];
