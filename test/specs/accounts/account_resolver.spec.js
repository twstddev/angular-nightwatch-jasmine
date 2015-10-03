"use strict";

var angular = require( "angular" );
require( "angular-mocks" );
require( "accounts" );

describe( "AccountResolver", function() {
	var accounts = [
		{
			id : "1"
		},
		{
			id : "2"
		}
	];

	beforeEach( angular.mock.module( "accounts", function( $provide ) {
		$provide.value( "Accounts", accounts );
		$provide.value( "$stateParams", {
			accountId : "1"
		} );
	} ) );

	it( "returns account for the requested id", angular.mock.inject( function( AccountResolver ) {
		expect( AccountResolver() ).toBe( accounts[ 0 ] );
	} ) );
} );
