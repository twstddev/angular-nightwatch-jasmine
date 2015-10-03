"use strict";

var angular = require( "angular" );
require( "angular-mocks" );
require( "transfer" );

describe( "TransferController", function() {
	var $scope;
	var customers = [ {
		id : "1"
	} ];
	var accounts = [
		{
			customerId : "1",
			total : 40
		},
		{
			customerId : "1",
			total : 70
		},
		{
			customerId : "2",
			total : 20
		}
	];

	beforeEach( angular.mock.module( "transfer" ) );

	beforeEach( angular.mock.inject( function( $rootScope, $controller ) {
		$scope = $rootScope.$new();

		$controller( "TransferController", {
			$scope : $scope,
			Customers : customers,
			Accounts : accounts
		} );
	} ) );

	it( "creates to and from objects when initialised", function() {
		expect( $scope.to ).toBeDefined();
		expect( $scope.from ).toBeDefined();
	} );

	it( "creates customers when initalised", function() {
		expect( $scope.customers ).toBe( customers );
	} );

	it( "creates accounts when initialised", function() {
		expect( $scope.accounts ).toBe( accounts );
	} );

	it( "returns accounts for customer", function() {
		var accountsForCustomer = $scope.getAccountsForCustomer( customers[ 0 ] );
		expect( accountsForCustomer.every( function( a ) { return a.customerId === "1"; } ) ).toBeTruthy();
	} );

	it( "performs transfer between accounts", function() {
		var amount = 20;
		var originalTo = accounts[ 0 ].total;
		var originalFrom = accounts[ 1 ].total;

		$scope.to.account = accounts[ 0 ];
		$scope.from.account = accounts[ 1 ];
		$scope.transfer( amount );

		expect( $scope.to.account.total ).toBe( originalTo + amount );
		expect( $scope.from.account.total ).toBe( originalFrom - amount );
	} );
} );
