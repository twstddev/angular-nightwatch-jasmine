"use strict";

var angular = require( "angular" );
require( "angular-mocks" );
require( "transactions" );

describe( "TransactionsRouter", function() {
	beforeEach( angular.mock.module( "transactions" ) );


	describe( "index", function() {
		var transactionsConfig;

		beforeEach( angular.mock.inject( function( $state ) {
			transactionsConfig = $state.get( "transactions" );
		} ) );

		it( "registers path", function() {
			expect( transactionsConfig ).not.toBeNull();
			expect( transactionsConfig.url ).toBe( "/accounts/:accountId/transactions" );
		} );

		it( "attaches to the main view", function() {
			expect( Object.keys( transactionsConfig.views ) ).toContain( "main" );
		} );

		it( "provides template", function() {
			expect( transactionsConfig.views.main.template ).toBeDefined();
		} );

		it( "registers controller", function() {
			expect( transactionsConfig.views.main.controller ).toBeDefined();
		} );
	} );
} );
