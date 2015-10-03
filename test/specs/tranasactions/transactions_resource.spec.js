"use strict";

var angular = require( "angular" );
require( "angular-mocks" );
require( "transactions" );

describe( "Transactions", function() {
	var transactions = [ { id : "1" } ];

	beforeEach( angular.mock.module( "transactions" ) );

	beforeEach( angular.mock.module( function( $localStorageProvider ) {
		$localStorageProvider.setKeyPrefix( "app-" );
	} ) );

	beforeEach( function() {
		localStorage.setItem( "app-transactions", JSON.stringify( transactions ) );
	} );

	it( "restores transactions from localStorage", angular.mock.inject( function( Transactions ) {
		expect( Transactions.length ).toBe( transactions.length );
		expect( Transactions[ 0 ].id ).toBe( transactions[ 0 ].id );
	} ) );
} );
