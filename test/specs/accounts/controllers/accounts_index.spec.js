"use strict";

var angular = require( "angular" );
require( "angular-mocks" );
require( "accounts" );

describe( "AccountsIndexController", function() {
	var $scope;
	var accounts = [
		{
			id : "1",
			total : 50,
			overdraft : 0,
			customerId : "1"
		},
		{
			id : "2",
			total: 20,
			overdraft: 30,
			customerId : "1"
		},
		{
			id : "3",
			total: 20,
			overdraft: 0,
			customerId : "2"
		}
	];
	var transactions;

	beforeEach( angular.mock.module( "accounts" ) );

	beforeEach( angular.mock.inject( function( $rootScope, $controller ) {
		transactions = [];
		$scope = $rootScope.$new();

		$controller( "AccountsIndexController", {
			$scope : $scope,
			Accounts : accounts,
			Transactions : transactions,
			AuthenticationService : {
				user : {
					id : "1"
				}
			}
		} );
	} ) );

	it( "creates a list of accounts when initialised", function() {
		expect( $scope.accounts ).toBeDefined();
		expect( $scope.accounts.length ).toBe( 2 );
	} );


	describe( "deposit", function() {
		var account;
		var deposit;
		var currentTotal;

		beforeEach( function() {
			account = $scope.accounts[ 0 ];
			deposit = 70;
			currentTotal = account.total;
		} );

		it( "allows depositing money to an account", function() {
			$scope.depositToAccount( account, deposit );
			expect( account.total ).toBe( deposit + currentTotal );
		} );

		it( "adds deposit transaction to the transactions list", function() {
			$scope.depositToAccount( account, deposit );
			expect( transactions[ 0 ] ).toEqual( jasmine.objectContaining( { 
				accountId : account.id,
				action : "deposit",
				amount : deposit
			} ) );
		} );
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

		it( "allows withdrawing money from an account", function() {
			var withdraw = 15;

			$scope.withdrawFromAccount( account, withdraw );
			expect( account.total ).toBe( currentTotal - withdraw );
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

		it( "adds withdraw transaction to the transactions list", function() {
			var withdraw = 15;

			$scope.withdrawFromAccount( account, withdraw );

			expect( transactions[ 0 ] ).toEqual( jasmine.objectContaining( { 
				accountId : account.id,
				action : "withdraw",
				amount : withdraw
			} ) );
		} );
	} );

	it( "allows withdrawing if not enough money but allowed overdraft", function() {
		var account = accounts[ 1 ];
		var withdraw = 40;
		var currentTotal = account.total;
		
		$scope.withdrawFromAccount( account, withdraw );
		expect( account.total ).toBe( currentTotal - withdraw );
	} );


	it( "removes messages from the errors list", function() {
		$scope.errors.push( {} );
		$scope.clearErrors();
		expect( $scope.errors.length ).toBe( 0 );
	} );

	it( "resets accounts total and transactions for the accounts", function() {
		transactions.push( { accountId : "1" } );
		transactions.push( { accountId : "3" } );
		$scope.accounts = [ $scope.accounts[ 0 ] ];

		$scope.resetAccounts();

		expect( transactions.length ).toBe( 1 );
		expect( transactions[ 0 ].accountId ).toBe( "3" );
		expect( $scope.accounts[ 0 ].total ).toBe( 0 );
	} );

	it( "displays accounts only for currently logged in customer", function() {
		expect( $scope.accounts.every( function( a ) { return a.customerId === "1"; } ) ).toBeTruthy();
	} );
} );
