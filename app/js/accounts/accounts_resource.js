"use strict";

/**
 * Implements simple accounts resource wrapper around
 * localStorage value.
 *
 * @name Accounts
 * @memberof module:Accounts
 */
module.exports = [ "$localStorage", function( $localStorage ) {
	$localStorage.accounts = $localStorage.accounts || [];

	return $localStorage.accounts;
} ];
