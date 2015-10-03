"use strict";

var angular = require( "angular" );
require( "angular-mocks" );
require( "transfer" );

describe( "TransferRouter", function() {
	var transferConfig;

	beforeEach( angular.mock.module( "transfer" ) );

	beforeEach( angular.mock.inject( function( $state ) {
		transferConfig = $state.get( "transfer" );
	} ) );

	it( "registers path", function() {
		expect( transferConfig ).not.toBeNull();
		expect( transferConfig.url ).toBe( "/transfer" );
	} );

	it( "attaches to the main view", function() {
		expect( Object.keys( transferConfig.views ) ).toContain( "main" );
	} );

	it( "provides template", function() {
		expect( transferConfig.views.main.template ).toBeDefined();
	} );

	it( "registers controller", function() {
		expect( transferConfig.views.main.controller ).toBeDefined();
	} );
} );
