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
	} );

	afterEach( function( client, done ) {
		this.application.close( done );
	} );
} );
