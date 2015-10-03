"use strict";

var angular = require( "angular" );
require( "angular-mocks" );
require( "accounts" );

describe( "AccountsCustomersAddController", function() {
	var $scope;
	var accounts = [];

	beforeEach( angular.mock.module( "accounts" ) );

	beforeEach( angular.mock.inject( function( $rootScope, $controller ) {
		$scope = $rootScope.$new();

		$controller( "AccountsCustomersAddController", {
			$scope : $scope,
			Accounts : accounts,
			CustomerResolver : jasmine.createSpy( "" ).and.returnValue( { id : "1" } )
		} );
	} ) );

	it( "creates a account when initialised", function() {
		expect( $scope.account ).toBeDefined();
	} );

	it( "adds random id to the newly created account", function() {
		expect( $scope.account.id ).toBeDefined();
	} );

	it( "add currently selected customer id to account", function() {
		expect( $scope.account.customerId ).toBe( "1" );
	} );

	it( "adds created account to the accounts list", function() {
		var account = {};
		$scope.account = account;
		$scope.createAccount();
		
		expect( accounts ).toContain( account );
	} );

	it( "redirects back to accounts customer list once account has been created", angular.mock.inject( function( $state ) {
		$scope.account = {};
		$scope.createAccount();
		$scope.$apply();

		expect( $state.current.name ).toBe( "customers.accounts.list" );
	} ) );
} );
