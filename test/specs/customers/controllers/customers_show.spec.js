"use strict";

var angular = require( "angular" );
require( "angular-mocks" );
require( "customers" );

describe( "CustomersShowController", function() {
	var $scope;
	var customers = [ {
		id : "1",
		username : "user1"
	} ];

	beforeEach( angular.mock.module( "customers" ) );

	beforeEach( angular.mock.inject( function( $rootScope, $controller ) {
		$scope = $rootScope.$new();

		$controller( "CustomersShowController", {
			$scope : $scope,
			CustomerResolver : jasmine.createSpy( "" ).and.returnValue( customers[ 0 ] )
		} );
	} ) );

	it( "creates requested customer instance when initialised", function() {
		expect( $scope.customer ).toBeDefined();
		expect( $scope.customer ).toBe( customers[ 0 ] );
	} );
} );
