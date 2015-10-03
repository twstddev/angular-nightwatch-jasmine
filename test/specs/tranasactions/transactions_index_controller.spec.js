"use strict";

var angular = require( "angular" );
require( "angular-mocks" );
require( "transactions" );

describe( "TransactionsIndexController", function() {
	var $scope;
	var accountId = "1";
	var currency = "$";
	var transactions = [
		{
			id : "1",
			action : "deposit",
			amount : 20,
			accountId : "1"
		},
		{
			id : "1",
			action : "withdraw",
			amount : 80,
			accountId : "2"
		}
	];

	beforeEach( angular.mock.module( "transactions" ) );

	beforeEach( angular.mock.inject( function( $rootScope, $controller ) {
		$scope = $rootScope.$new();

		$controller( "TransactionsIndexController", {
			$scope : $scope,
			Transactions : transactions,
			AccountResolver : jasmine.createSpy( "" ).and.returnValue( {
				id : accountId,
				currency : currency
			} )
		} );
	} ) );

	it( "creates a list of transactions for the requested account when initialised", function() {
		expect( $scope.transactions ).toBeDefined();
		expect( $scope.transactions.every( function( t ) { return t.accountId === accountId; } ) ).toBeTruthy();
	} );

	it( "displays positive amount for deposit", function() {
		expect( $scope.getTransactionAmount( transactions[ 0 ] ) ).toBe( "$20" );
	} );

	it( "displays negative amount for widthdaw", function() {
		expect( $scope.getTransactionAmount( transactions[ 1 ] ) ).toBe( "-$80" );
	} );
} );
