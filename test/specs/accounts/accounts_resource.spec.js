"use strict";

var angular = require( "angular" );
require( "angular-mocks" );
require( "accounts" );

describe( "Accounts", function() {
	var accounts = [ { id : "1" } ];

	beforeEach( angular.mock.module( "accounts" ) );

	beforeEach( angular.mock.module( function( $localStorageProvider ) {
		$localStorageProvider.setKeyPrefix( "app-" );
	} ) );

	beforeEach( function() {
		localStorage.setItem( "app-accounts", JSON.stringify( accounts ) );
	} );

	it( "restores accounts from localStorage", angular.mock.inject( function( Accounts ) {
		expect( Accounts.length ).toBe( accounts.length );
		expect( Accounts[ 0 ].id ).toBe( accounts[ 0 ].id );
	} ) );
} );
