"use strict";

var angular = require( "angular" );
require( "angular-mocks" );
require( "authentication" );

var ApplicationConfig = require( "config.json" );

describe( "AuthenticationService", function() {
	var customers = [
		{
			"id" : "2",
			"username" : "testcustomer"
		}
	];

	beforeEach( angular.mock.module( "authentication", function( $provide ) {
		$provide.constant( "ApplicationConfig", ApplicationConfig );
		$provide.factory( "Customers", function() { return customers; } );
	} ) );

	it( "authenticates existing customer", angular.mock.inject( function( AuthenticationService ) {
		var credentials = {
			username : customers[ 0 ].username,
			password : "123456"
		};

		expect( AuthenticationService.authenticate( credentials ) ).toBeTruthy();
	} ) );
} );
