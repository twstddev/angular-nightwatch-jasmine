"use strict";

var angular = require( "angular" );
require( "angular-mocks" );
require( "customers" );

describe( "CustomersIndexController", function() {
	var $scope;
	var customers = [];

	beforeEach( angular.mock.module( "customers" ) );

	beforeEach( angular.mock.inject( function( $rootScope, $controller ) {
		$scope = $rootScope.$new();

		$controller( "CustomersIndexController", {
			$scope : $scope,
			Customers : customers
		} );
	} ) );

	it( "creates a list of customers when initialised", function() {
		expect( $scope.customers ).toBeDefined();
	} );

	it( "assigns customers resource to customers on the scope", function() {
		expect( $scope.customers ).toBe( customers );
	} );
} );
