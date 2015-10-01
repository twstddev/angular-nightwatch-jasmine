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

			it( "registers path", function() {
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

		describe( "add", function() {
			var accountsAddConfig;

			beforeEach( angular.mock.inject( function( $state ) {
				accountsAddConfig = $state.get( "customers.accounts.add" );
			} ) );

			it( "registers path", function() {
				expect( accountsAddConfig ).not.toBeNull();
				expect( accountsAddConfig.url ).toBe( "/add" );
			} );

			it( "provides template", function() {
				expect( accountsAddConfig.template ).toBeDefined();
			} );

			it( "registers controller", function() {
				expect( accountsAddConfig.controller ).toBeDefined();
			} );

			it( "resolves customerId from url", angular.mock.inject( function( $state, $rootScope, $injector ) {
				var customerId = "1";

				$state.go( "customers.accounts.add", { customerId : customerId } );
				$rootScope.$digest();

				expect( $injector.invoke($state.current.resolve.customerId ) ).toBe( customerId );
			} ) );
		} );

		describe( "edit", function() {
			var accountsEditConfig;

			beforeEach( angular.mock.inject( function( $state ) {
				accountsEditConfig = $state.get( "customers.accounts.edit" );
			} ) );

			it( "registers path", function() {
				expect( accountsEditConfig ).not.toBeNull();
				expect( accountsEditConfig.url ).toBe( "/:accountId/edit" );
			} );

			it( "provides template", function() {
				expect( accountsEditConfig.template ).toBeDefined();
			} );

			it( "registers controller", function() {
				expect( accountsEditConfig.controller ).toBeDefined();
			} );

			it( "resolves customerId from url", angular.mock.inject( function( $state, $rootScope, $injector ) {
				var customerId = "1";

				$state.go( "customers.accounts.edit", { customerId : customerId } );
				$rootScope.$digest();

				expect( $injector.invoke($state.current.resolve.customerId ) ).toBe( customerId );
			} ) );

			it( "resolves accountId from url", angular.mock.inject( function( $state, $rootScope, $injector ) {
				var accountId = "1";

				$state.go( "customers.accounts.edit", { accountId : accountId } );
				$rootScope.$digest();

				expect( $injector.invoke($state.current.resolve.accountId ) ).toBe( accountId );
			} ) );
		} );
	} );

	describe( "generic accounts page", function() {
			var accountsConfig;

			beforeEach( angular.mock.inject( function( $state ) {
				accountsConfig = $state.get( "accounts" );
			} ) );

			it( "registers path", function() {
				expect( accountsConfig ).not.toBeNull();
				expect( accountsConfig.url ).toBe( "/accounts" );
			} );

			it( "attaches to the main view", function() {
				expect( Object.keys( accountsConfig.views ) ).toContain( "main" );
			} );

			it( "provides template", function() {
				expect( accountsConfig.views.main.template ).toBeDefined();
			} );

			it( "registers controller", function() {
				expect( accountsConfig.views.main.controller ).toBeDefined();
			} );
	} );
} );
