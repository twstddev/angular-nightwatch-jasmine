"use strict";

var customersFixture = require( "../fixtures/customers.json" );
var accountsFixture = require( "../fixtures/accounts.json" );
var transactionsFixture = require( "../fixtures/transactions.json" );

describe( "Accounts", function() {
	beforeEach( function( client, done ) {
		this.storage = new client.globals.Storage( client );
		this.application = new client.globals.Application( client );
		this.application.open();

		this.accountsWidget = new client.globals.AccountsWidget( client );
		this.transactionsWidget = new client.globals.TransactionWidget( client );

		this.storage.addCustomers( customersFixture );
		this.storage.addAccounts( accountsFixture );
		this.storage.addTransactions( transactionsFixture );

		done();
	} );

	describe( "For customer", function() {
		var customerId = customersFixture[ 0 ].id;

		it( "displays a list of accounts for requested customer", function() {
			this.accountsWidget.openListPageForCustomer( customerId );

			this.accountsWidget.containsAccountId( "1" );
			this.accountsWidget.containsAccountId( "2" );
			this.accountsWidget.doesntContainAccountId( "3" );
		} );

		describe( "Add page", function() {
			var account = {
				currency : "$",
				total : 30
			};

			beforeEach( function( client, done ) {
				this.accountsWidget.openListPageForCustomer( customerId );

				done();
			} );

			it( "creates a new account", function() {
				this.accountsWidget.addAccountFor( customerId, account );

				this.accountsWidget.openListPageForCustomer( customerId );
				this.accountsWidget.containsAccount( account.currency, account.total );
			} );

			it( "requires currency value", function() {
				var invalidAccount = Object.create( account );
				invalidAccount.currency = "";

				this.accountsWidget.addAccountFor( customerId, invalidAccount );
				this.accountsWidget.containsError( "Currency is required" );
			} );

			it( "requires total value", function() {
				var invalidAccount = Object.create( account );
				invalidAccount.total = "";

				this.accountsWidget.addAccountFor( customerId, invalidAccount );
				this.accountsWidget.containsError( "Total is required" );
			} );
		} );

		describe( "Edit page", function() {
			var accountId = accountsFixture[ 0 ].id;

			beforeEach( function( client, done ) {
				this.accountsWidget.openListPageForCustomer( customerId );

				done();
			} );

			it( "updates existing customer", function(client) {
				var newCurrency = "Z";
				var newTotal = 55;

				this.accountsWidget.editAccountFor( customerId, accountId, {
					currency : newCurrency,
					total : newTotal
				} );

				this.accountsWidget.openListPageForCustomer( customerId );
				this.accountsWidget.containsAccount( newCurrency, newTotal );
			} );

			it( "requires currency value", function() {
				this.accountsWidget.editAccountFor( customerId, accountId, { currency : "" } );
				this.accountsWidget.containsError( "Currency is required" );
			} );

			it( "requires total value", function() {
				this.accountsWidget.editAccountFor( customerId, accountId, { total : "" } );
				this.accountsWidget.containsError( "Total is required" );
			} );
		} );

		it( "removes existing account", function() {
			var accountId = accountsFixture[ 0 ].id;

			this.accountsWidget.openListPageForCustomer( customerId );

			this.accountsWidget.removeAccount( accountId );
			this.accountsWidget.doesntContainAccountId( accountId );
		} );
	} );

	it( "displays a list of accounts on generic accounts page", function() {
			this.accountsWidget.openAccountsListPage();

			this.accountsWidget.containsAccountId( "1" );
			this.accountsWidget.containsAccountId( "2" );
	} );

	describe( "Deposit", function() {
		it( "allows adding money to an account", function() {
			var accountId = accountsFixture[ 0 ].id;
			var currentTotal = accountsFixture[ 0 ].total;
			var deposit = 80;

			this.accountsWidget.openAccountsListPage();
			this.accountsWidget.depositTo( accountId, deposit );
			this.accountsWidget.containsAccount( accountsFixture[ 0 ].currency, currentTotal + deposit );
		} );
	} );

	describe( "Withdraw", function() {
		it( "allows withdrawing from an account", function() {
			var accountId = accountsFixture[ 1 ].id;
			var currentTotal = accountsFixture[ 1 ].total;
			var withdraw = 5;

			this.accountsWidget.openAccountsListPage();
			this.accountsWidget.withdrawFrom( accountId, withdraw );
			this.accountsWidget.containsAccount( accountsFixture[ 1 ].currency, currentTotal - withdraw );
		} );

		it( "doesn't allow withdrawing over the balance limit", function() {
			var accountId = accountsFixture[ 1 ].id;
			var currentTotal = accountsFixture[ 1 ].total;
			var withdraw = currentTotal + 100;

			this.accountsWidget.openAccountsListPage();
			this.accountsWidget.withdrawFrom( accountId, withdraw );
			this.accountsWidget.doesntContainAccount( accountsFixture[ 1 ].currency, currentTotal - withdraw );
			this.accountsWidget.containsError( "have enough money" );
		} );

		it( "allows withdrawing when not enoung money but overdraft allowed", function() {
			var accountId = accountsFixture[ 2 ].id;
			var currentTotal = accountsFixture[ 2 ].total;
			var withdraw = currentTotal + 100;

			this.accountsWidget.openAccountsListPage();
			this.accountsWidget.withdrawFrom( accountId, withdraw );
			this.accountsWidget.containsAccount( accountsFixture[ 2 ].currency, currentTotal - withdraw );
		} );
	} );

	it( "resets accounts total and transactions when reset button clicked", function() {
		var account = accountsFixture[ 1 ];
		this.accountsWidget.openAccountsListPage();
		this.accountsWidget.resetAccounts();

		this.accountsWidget.doesntContainAccount( account.currency, account.total );

		this.transactionsWidget.openListPageForAccount( account.id );
		this.transactionsWidget.doesntContainTransaction( "$40" );
	} );

	afterEach( function( client, done ) {
		this.application.close( done );
	} );
} );
