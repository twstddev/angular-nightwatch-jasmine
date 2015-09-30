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

	it( "displays a list of customers", function() {
		this.storage.addCustomers( customersFixture );
		this.customersWidget.openListPage();

		this.customersWidget.containsCustomer( "user1" );
		this.customersWidget.containsCustomer( "user2" );
		this.customersWidget.doesntContainCustomer( "user3" );
	} );

	describe.only( "Add page", function() {
		var customer = {
			username : "user4",
			email : "user4@user.org",
			firstName : "first",
			lastName : "last"
		};

		it( "creates a new customer", function() {
			this.customersWidget.addCustomer( customer );

			this.customersWidget.openListPage();
			this.customersWidget.containsCustomer( "user4" );
		} );

		it( "requires username value", function() {
			var invalidCustomer = Object.create( customer );
			invalidCustomer.username = "";

			this.customersWidget.addCustomer( invalidCustomer );
			this.customersWidget.containsError( "Username is required" );
		} );

		it( "requires email value", function() {
			var invalidCustomer = Object.create( customer );
			invalidCustomer.email = "";

			this.customersWidget.addCustomer( invalidCustomer );
			this.customersWidget.containsError( "Email is required" );
		} );

		it( "requires email to be valid", function() {
			var invalidCustomer = Object.create( customer );
			invalidCustomer.email = "email";

			this.customersWidget.addCustomer( invalidCustomer );
			this.customersWidget.containsError( "Email must be valid" );
		} );

		it( "requires first name value", function() {
			var invalidCustomer = Object.create( customer );
			invalidCustomer.firstName = "";

			this.customersWidget.addCustomer( invalidCustomer );
			this.customersWidget.containsError( "First name is required" );
		} );

		it( "requires last name value", function() {
			var invalidCustomer = Object.create( customer );
			invalidCustomer.lastName = "";

			this.customersWidget.addCustomer( invalidCustomer );
			this.customersWidget.containsError( "Last name is required" );
		} );
	} );


	afterEach( function( client, done ) {
		this.application.close( done );
	} );
} );
