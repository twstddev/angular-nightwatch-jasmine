"use strict";

var angular = require( "angular" );
require( "angular-mocks" );
require( "customers" );

describe( "CustomersEditController", function() {
	var $scope;
	var customers = [ {
		id : "1",
		username : "user1"
	} ];

	beforeEach( angular.mock.module( "customers" ) );

	beforeEach( angular.mock.inject( function( $rootScope, $controller ) {
		$scope = $rootScope.$new();

		$controller( "CustomersEditController", {
			$scope : $scope,
			Customers : customers,
			customerId : "1"
		} );
	} ) );

	it( "creates a copy of requested customer when initialised", function() {
		expect( $scope.customer ).toBeDefined();
		expect( $scope.customer.id ).toBe( customers[ 0 ].id );
		expect( $scope.customer ).not.toBe( customers[ 0 ] );
	} );

	it( "updates given customer", function() {
		var newUsername = "usernew";

		$scope.customer.username = newUsername;
		expect( customers[ 0 ].username ).not.toBe( newUsername );

		$scope.updateCustomer();
		expect( customers[ 0 ].username ).toBe( newUsername );
	} );

	it( "redirects back to customers list once customer has been updated", angular.mock.inject( function( $state ) {
		$scope.updateCustomer();
		$scope.$apply();

		expect( $state.current.name ).toBe( "customers.list" );
	} ) );
} );
