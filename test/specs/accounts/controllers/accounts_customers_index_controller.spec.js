"use strict";

var angular = require( "angular" );
require( "angular-mocks" );
require( "accounts" );

describe( "AccountsCustomersIndexController", function() {
	var $scope;
	var accounts = [ 
		{
			id : "1",
			total : 20,
			customerId : "1"
		}, 
		{
			id : "2",
			total : 10,
			customerId : "2"
		}
	];

	beforeEach( angular.mock.module( "accounts" ) );

	beforeEach( angular.mock.inject( function( $rootScope, $controller ) {
		$scope = $rootScope.$new();

		$controller( "AccountsCustomersIndexController", {
			$scope : $scope,
			Accounts : accounts,
			customerId : 1
		} );
	} ) );

	it( "creates a list of accounts for the requested customer when initialised", function() {
		expect( $scope.accounts ).toBeDefined();
		expect( $scope.accounts.every( function( a ) { return a.customerId === 1; } ) ).toBeTruthy();
	} );
} );
