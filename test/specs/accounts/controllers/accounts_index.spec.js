"use strict";

var angular = require( "angular" );
require( "angular-mocks" );
require( "accounts" );

describe( "AccountsIndexController", function() {
	var $scope;
	var accounts = [];

	beforeEach( angular.mock.module( "accounts" ) );

	beforeEach( angular.mock.inject( function( $rootScope, $controller ) {
		$scope = $rootScope.$new();

		$controller( "AccountsIndexController", {
			$scope : $scope,
			Accounts : accounts
		} );
	} ) );

	it( "creates a list of accounts when initialised", function() {
		expect( $scope.accounts ).toBeDefined();
		expect( $scope.accounts ).toBe( accounts );
	} );
} );
