"use strict";

var customersFixture = require( "../fixtures/customers.json" );

describe( "Customers", function() {
	beforeEach( function( client, done ) {
		this.storage = new client.globals.Storage( client );
		this.application = new client.globals.Application( client );
		this.application.open();

		this.customersWidget = new client.globals.CustomersWidget( client );

		done();
	} );

	it( "displays a list of customers", function( client ) {
		this.storage.addCustomers( customersFixture );
		this.customersWidget.openListPage();

		this.customersWidget.containsCustomer( "user1" );
		this.customersWidget.containsCustomer( "user2" );
		this.customersWidget.doesntContainCustomer( "user3" );
	} );

	afterEach( function( client, done ) {
		this.application.close( done );
	} );
} );
