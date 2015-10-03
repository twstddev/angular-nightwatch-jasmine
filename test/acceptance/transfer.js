"use strict";

var customersFixture = require( "../fixtures/customers.json" );
var accountsFixture = require( "../fixtures/accounts.json" );

describe( "Transfer", function() {
	var accountFrom;
	var accountTo;
	var from;
	var to;

	beforeEach( function( client, done ) {
		accountFrom = accountsFixture[ 1 ];
		accountTo = accountsFixture[ 2 ];
		from = {
			customerId : accountFrom.customerId,
			accountId : accountFrom.id
		};

		to = {
			customerId : accountTo.customerId,
			accountId : accountTo.id
		};

		this.storage = new client.globals.Storage( client );
		this.application = new client.globals.Application( client );
		this.application.open();
		
		this.accountsWidget = new client.globals.AccountsWidget( client );
		this.transferWidget = new client.globals.TransferWidget( client );

		this.storage.addCustomers( customersFixture );
		this.storage.addAccounts( accountsFixture );

		done();
	} );

	it( "transfers amount from one account to another", function() {
		var amount = 20;

		this.transferWidget.openTransferPage();
		this.transferWidget.transferMoney( from, to, amount );

		this.accountsWidget.openListPageForCustomer( from.customerId );
		this.accountsWidget.containsAccount( accountFrom.currency, accountFrom.total - amount );

		this.accountsWidget.openListPageForCustomer( to.customerId );
		this.accountsWidget.containsAccount( accountTo.currency, accountTo.total + amount );
	} );

	afterEach( function( client, done ) {
		this.application.close( done );
	} );
} );
