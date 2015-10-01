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

	it( "allows withdrawing money from an account", function() {
		var account = $scope.accounts[ 0 ];
		var withdraw = 15;
		var currentTotal = account.total;

		$scope.withdrawFromAccount( account, withdraw );
		expect( account.total ).toBe( currentTotal - withdraw );
	} );

	describe( "withdraw", function() {
		var account;
		var currentTotal;
		var withdraw;

		beforeEach( function() {
			account = $scope.accounts[ 0 ];
			currentTotal = account.total;
			withdraw = currentTotal + 20;
		} );

		it( "doesn't allow withdrawing if account doesn't have enough money", function() {
			$scope.withdrawFromAccount( account, withdraw );
			expect( account.total ).toBe( currentTotal );
		} );

		it( "adds error if account doesn't have enough money to withdraw", function() {
			expect( $scope.errors.length ).toBe( 0 );
			$scope.withdrawFromAccount( account, withdraw );
			expect( $scope.errors.length ).toBe( 1 );
		} );
	} );

	it( "removes messages from the errors list", function() {
		$scope.errors.push( {} );
		$scope.clearErrors();
		expect( $scope.errors.length ).toBe( 0 );
	} );
} );
