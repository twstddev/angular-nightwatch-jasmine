"use strict";

var angular = require( "angular" );
require( "angular-mocks" );
require( "customers" );

describe( "CustomersRouter", function() {
	beforeEach( angular.mock.module( "customers" ) );

	describe( "index", function() {
		var customersConfig;

		beforeEach( angular.mock.inject( function( $state ) {
			customersConfig = $state.get( "customers" );
		} ) );

		it( "registers customers path", function() {
			expect( customersConfig ).not.toBeNull();
			expect( customersConfig.url ).toBe( "/customers" );
		} );

		it( "attaches to the main view", function() {
			expect( Object.keys( customersConfig.views ) ).toContain( "main" );
		} );

		it( "provides template", function() {
			expect( customersConfig.views.main.template ).toBeDefined();
		} );

		it( "registers controller", function() {
			expect( customersConfig.views.main.controller ).toBeDefined();
		} );
	} );
} );

