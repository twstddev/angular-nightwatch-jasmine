"use strict";

var angular = require( "angular" );
require( "angular-mocks" );
require( "accounts" );

describe( "AccountsIndexController", function() {
	var $scope;
	var accounts = [ {
		id : "1",
		total : 50
	} ];

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

	it( "allows depositing money to an account", function() {
		var account = $scope.accounts[ 0 ];
		var deposit = 70;
		var currentTotal = account.total;

		$scope.depositToAccount( account, deposit );
		expect( account.total ).toBe( deposit + currentTotal );
	} );
} );
