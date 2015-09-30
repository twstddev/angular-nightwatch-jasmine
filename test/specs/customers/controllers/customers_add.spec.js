"use strict";

var angular = require( "angular" );
require( "angular-mocks" );
require( "customers" );

describe( "CustomersAddController", function() {
	var $scope;
	var customers = [];

	beforeEach( angular.mock.module( "customers" ) );

	beforeEach( angular.mock.inject( function( $rootScope, $controller ) {
		$scope = $rootScope.$new();

		$controller( "CustomersAddController", {
			$scope : $scope,
			Customers : customers
		} );
	} ) );

	it( "creates a customer when initialised", function() {
		expect( $scope.customer ).toBeDefined();
	} );

	it( "adds random id to the newly created customer", function() {
		expect( $scope.customer.id ).toBeDefined();
	} );

	it( "adds created customer to the customers list", function() {
		var customer = {};
		$scope.customer = customer;
		$scope.createCustomer();
		
		expect( customers ).toContain( customer );
	} );

	it( "redirects back to customers list once customer has been created", angular.mock.inject( function( $state ) {
		$scope.customer = {};
		$scope.createCustomer();
		$scope.$apply();

		expect( $state.current.name ).toBe( "customers.list" );
	} ) );
} );
