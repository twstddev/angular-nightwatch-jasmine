"use strict";

var angular = require( "angular" );
require( "angular-mocks" );
require( "accounts" );

describe( "AccountsRouter", function() {
	beforeEach( angular.mock.module( "accounts" ) );

	describe( "For customer id ", function() {
		describe( "Abstract parent", function() {
			var accountsConfig;

			beforeEach( angular.mock.inject( function( $state ) {
				accountsConfig = $state.get( "customers.accounts" );
			} ) );

			it( "registers accounts path", function() {
				expect( accountsConfig ).not.toBeNull();
				expect( accountsConfig.url ).toBe( "/:customerId/accounts" );
			} );
		} );

		describe( "index", function() {
			var accountsListConfig;

			beforeEach( angular.mock.inject( function( $state ) {
				accountsListConfig = $state.get( "customers.accounts.list" );
			} ) );

			it( "registers customers path", function() {
				expect( accountsListConfig ).not.toBeNull();
				expect( accountsListConfig.url ).toBe( "" );
			} );

			it( "provides template", function() {
				expect( accountsListConfig.template ).toBeDefined();
			} );

			it( "registers controller", function() {
				expect( accountsListConfig.controller ).toBeDefined();
			} );

			it( "resolves customerId from url", angular.mock.inject( function( $state, $rootScope, $injector ) {
				var customerId = "1";

				$state.go( "customers.accounts.list", { customerId : customerId } );
				$rootScope.$digest();

				expect( $injector.invoke($state.current.resolve.customerId ) ).toBe( customerId );
			} ) );
		} );
	} );
} );
