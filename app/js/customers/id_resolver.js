"use strict";

/**
 * Simple resolver that returns customer id from the
 * state parameters.
 * 
 * @function customerIdResolver
 * @memberof module:Customers
 */
module.exports =  [ "$stateParams", function( $stateParams ) {
	return $stateParams.customerId;
} ];
