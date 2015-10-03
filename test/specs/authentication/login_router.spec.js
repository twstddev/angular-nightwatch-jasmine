"use strict";

var angular = require( "angular" );
require( "angular-mocks" );
require( "authentication" );

var ApplicationConfig = require( "config.json" );

describe( "LoginRouter", function() {
	var loginConfig;

	beforeEach( angular.mock.module( "authentication", function( $provide ) {
		$provide.constant( "ApplicationConfig", ApplicationConfig );
		$provide.factory( "Customers", function() { return []; } );
	} ) );

	beforeEach( angular.mock.inject( function( $state ) {
		loginConfig = $state.get( "login" );
	} ) );

	it( "registers login path", function() {
		expect( loginConfig ).not.toBeNull();
	} );

	it( "attaches to the document view", function() {
		expect( Object.keys( loginConfig.views ) ).toContain( "document" );
	} );

	it( "provides template", function() {
		expect( loginConfig.views.document.template ).toBeDefined();
	} );

	it( "registers controller", function() {
		expect( loginConfig.views.document.controller ).toBeDefined();
	} );
} );
