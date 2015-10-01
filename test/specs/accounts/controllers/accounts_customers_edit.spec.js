"use strict";

var angular = require( "angular" );
require( "angular-mocks" );
require( "accounts" );

describe( "AccountsCustomersEditController", function() {
	var $scope;
	var accountId = "1";
	var customerId = "1";
	var accounts = [ {
		id : accountId,
		currency : "Z",
		customerId : customerId
	} ];

	beforeEach( angular.mock.module( "accounts" ) );

	beforeEach( angular.mock.inject( function( $rootScope, $controller ) {
		$scope = $rootScope.$new();

		$controller( "AccountsCustomersEditController", {
			$scope : $scope,
			Accounts : accounts,
			customerId : customerId,
			accountId : accountId
		} );
	} ) );

	it( "creates a copy of requested account when initialised", function() {
		expect( $scope.account ).toBeDefined();
		expect( $scope.account.id ).toBe( accountId );
		expect( $scope.account ).not.toBe( accounts[ 0 ] );
	} );

	it( "updates given account", function() {
		var newCurrency = "A";

		$scope.account.currency = newCurrency;
		expect( accounts[ 0 ].currency ).not.toBe( newCurrency );

		$scope.updateAccount();
		expect( accounts[ 0 ].currency ).toBe( newCurrency );
	} );

	it( "redirects back to accounts customer list once account has been updated", angular.mock.inject( function( $state ) {
		$scope.updateAccount();
		$scope.$apply();

		expect( $state.current.name ).toBe( "customers.accounts.list" );
	} ) );
} );
