"use strict";

var customersFixture = require( "../fixtures/customers.json" );
var accountsFixture = require( "../fixtures/accounts.json" );

describe( "Accounts", function() {
	beforeEach( function( client, done ) {
		this.storage = new client.globals.Storage( client );
		this.application = new client.globals.Application( client );
		this.application.open();

		this.accountsWidget = new client.globals.AccountsWidget( client );

		this.storage.addCustomers( customersFixture );
		this.storage.addAccounts( accountsFixture );

		done();
	} );

	describe( "For customer", function() {
		it( "displays a list of accounts for requested customer", function() {
			this.accountsWidget.openListPageForCustomer( customersFixture[ 0 ].id );

			this.accountsWidget.containsAccountId( "1" );
			this.accountsWidget.containsAccountId( "2" );
			this.accountsWidget.doesntContainAccountId( "3" );
		} );

		describe( "Add page", function() {
			var account = {
				currency : "$",
				total : 30
			};
			var customerId = customersFixture[ 0 ].id;

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
			var customerId = customersFixture[ 0 ].id;
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
	} );

	afterEach( function( client, done ) {
		this.application.close( done );
	} );
} );
