"use strict";

var angular = require( "angular" );
require( "angular-mocks" );
require( "customers" );

describe( "Customers", function() {
	var customers = [ { username : "user1" } ];

	beforeEach( angular.mock.module( "customers" ) );

	beforeEach( angular.mock.module( function( $localStorageProvider ) {
		$localStorageProvider.setKeyPrefix( "app-" );
	} ) );

	beforeEach( function() {
		localStorage.setItem( "app-customers", JSON.stringify( customers ) );
	} );

	it( "restores customers from localStorage", angular.mock.inject( function( Customers ) {
		expect( Customers.length ).toBe( customers.length );
		expect( Customers[ 0 ].username ).toBe( customers[ 0 ].username );
	} ) );
} );
