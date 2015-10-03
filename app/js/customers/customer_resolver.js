"use strict";

var _ = require( "lodash" );

/**
 * Simple resolver that returns customer for the id from the
 * state parameters.
 * 
 * @function CustomerResolver
 * @memberof module:Customers
 */
module.exports =  [ "Customers", "$stateParams", function( Customers, $stateParams ) {
	return function() {
		return _.find( Customers, { id : $stateParams.customerId } );
	};
} ];
