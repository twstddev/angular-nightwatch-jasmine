"use strict";

var accountsFixture = require( "../fixtures/accounts.json" );
var transactionsFixture = require( "../fixtures/transactions.json" );

describe( "Transactions", function() {
	beforeEach( function( client, done ) {
		this.storage = new client.globals.Storage( client );
		this.application = new client.globals.Application( client );
		this.application.open();

		this.accountsWidget = new client.globals.AccountsWidget( client );
		this.transactionsWidget = new client.globals.TransactionWidget( client );
		this.loginWidget = new client.globals.LoginWidget( client );

		this.storage.addAccounts( accountsFixture );
		this.storage.addTransactions( transactionsFixture );

		this.loginWidget.loginAsCustomer();

		done();
	} );

	it( "displays a list of transactions for account", function(client) {
		this.transactionsWidget.openListPageForAccount( "1" );

		this.transactionsWidget.containsTransaction( "£100" );
		this.transactionsWidget.containsTransaction( "-£20"  );
		this.transactionsWidget.doesntContainTransaction( "$40" );
	} );

	it( "adds deposit transaction to the list", function() {
		var accountId = accountsFixture[ 0 ].id;
		var currentTotal = accountsFixture[ 0 ].total;
		var currency = accountsFixture[ 0 ].currency;
		var deposit = 80;

		this.accountsWidget.openAccountsListPage();
		this.accountsWidget.depositTo( accountId, deposit );

		this.transactionsWidget.openListPageForAccount( accountId );
		this.transactionsWidget.containsTransaction( currency + deposit );
	} );

	it( "adds withdraw transaction to the list", function() {
		var accountId = accountsFixture[ 1 ].id;
		var currentTotal = accountsFixture[ 1 ].total;
		var currency = accountsFixture[ 1 ].currency;
		var withdraw = 15;

		this.accountsWidget.openAccountsListPage();
		this.accountsWidget.withdrawFrom( accountId, withdraw );

		this.transactionsWidget.openListPageForAccount( accountId );
		this.transactionsWidget.containsTransaction( "-" + currency + withdraw );
	} );

	afterEach( function( client, done ) {
		this.application.close( done );
	} );
} );
