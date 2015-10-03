"use strict";

describe( "Login Page", function() {
	beforeEach( function( client, done ) {
		this.application = new client.globals.Application( client );
		this.application.open();
		
		this.loginWidget = new client.globals.LoginWidget( client );
		this.loginWidget.open();

		done();
	} );

	it( "requires username", function() {
		this.loginWidget.login( "", "password" );
		this.loginWidget.containsError( "Username is required" );
	} );

	it( "requires password", function() {
		this.loginWidget.login( "username", "" );
		this.loginWidget.containsError( "Password is required" );
	} );

	afterEach( function( client, done ) {
		this.application.close( done );
	} );
} );
