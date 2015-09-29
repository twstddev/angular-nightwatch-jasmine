"use strict";

/**
 * Implements simple customers resource wrapper around
 * localStorage value.
 *
 * @name Customers
 * @memberof module:Customers
 */
module.exports = [ "$localStorage", function( $localStorage ) {
	$localStorage.customers = $localStorage.customers || [];

	return $localStorage.customers;
} ];
