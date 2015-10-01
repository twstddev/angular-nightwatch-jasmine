"use strict";

var angular = require( "angular" );

var customers = require( "js/customers" );
var accounts = require( "js/accounts" );

/**
 * @description Main application module that bootstraps
 * the application itself and loads main modules.
 *
 * @module app
 */
angular.module( "app", [ customers, accounts ] )
	.config( [ "$localStorageProvider", function( $localStorageProvider ) {
		$localStorageProvider.setKeyPrefix( "app-" );
	} ] );

angular.element( document ).ready( function() {
	angular.bootstrap( document.body, [ "app" ] );
} );
