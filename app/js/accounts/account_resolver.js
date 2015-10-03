"use strict";

var _ = require( "lodash" );

/**
 * Simple resolver that returns account for the id from the
 * state parameters.
 * 
 * @function AccountResolver
 * @memberof module:Accounts
 */
module.exports =  [ "Accounts", "$stateParams", function( Accounts, $stateParams ) {
	return function() {
		return _.find( Accounts, { id : $stateParams.accountId } );
	};
} ];
