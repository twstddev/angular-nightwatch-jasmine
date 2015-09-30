"use strict";

var angular = require( "angular" );
require( "angular-mocks" );
require( "customers" );

describe( "CustomersRouter", function() {
	beforeEach( angular.mock.module( "customers" ) );

	describe( "Abstract parent", function() {
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
	} );

	describe( "index", function() {
		var customersListConfig;

		beforeEach( angular.mock.inject( function( $state ) {
			customersListConfig = $state.get( "customers.list" );
		} ) );

		it( "registers path", function() {
			expect( customersListConfig ).not.toBeNull();
			expect( customersListConfig.url ).toBe( "" );
		} );


		it( "provides template", function() {
			expect( customersListConfig.template ).toBeDefined();
		} );

		it( "registers controller", function() {
			expect( customersListConfig.controller ).toBeDefined();
		} );
	} );

	describe( "add", function() {
		var customersAddConfig;

		beforeEach( angular.mock.inject( function( $state ) {
			customersAddConfig = $state.get( "customers.add" );
		} ) );

		it( "registers path", function() {
			expect( customersAddConfig ).not.toBeNull();
			expect( customersAddConfig.url ).toBe( "/add" );
		} );

		it( "provides template", function() {
			expect( customersAddConfig.template ).toBeDefined();
		} );

		it( "registers controller", function() {
			expect( customersAddConfig.controller ).toBeDefined();
		} );
	} );

	describe( "edit", function() {
		var customersEditConfig;

		beforeEach( angular.mock.inject( function( $state ) {
			customersEditConfig = $state.get( "customers.edit" );
		} ) );

		it( "registers path", function() {
			expect( customersEditConfig ).not.toBeNull();
			expect( customersEditConfig.url ).toBe( "/:customerId/edit" );
		} );

		it( "provides template", function() {
			expect( customersEditConfig.template ).toBeDefined();
		} );

		it( "registers controller", function() {
			expect( customersEditConfig.controller ).toBeDefined();
		} );

		it( "resolves customerId from url", angular.mock.inject( function( $state, $rootScope, $injector ) {
			var customerId = "1";

			$state.go( "customers.edit", { customerId : customerId } );
			$rootScope.$digest();

			expect( $injector.invoke($state.current.resolve.customerId ) ).toBe( customerId );
		} ) );
	} );
} );

