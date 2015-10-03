"use strict";

var angular = require( "angular" );
require( "angular-mocks" );
require( "customers" );

describe( "CustomerResolver", function() {
	var customers = [
		{
			id : "1"
		},
		{
			id : "2"
		}
	];

	beforeEach( angular.mock.module( "customers", function( $provide ) {
		$provide.value( "Customers", customers );
		$provide.value( "$stateParams", {
			customerId : "1"
		} );
	} ) );

	it( "returns customer for the requested id", angular.mock.inject( function( CustomerResolver ) {
		expect( CustomerResolver() ).toBe( customers[ 0 ] );
	} ) );
} );
