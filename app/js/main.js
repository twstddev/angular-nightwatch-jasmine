"use strict";

var angular = require( "angular" );

var customers = require( "js/customers" );

/**
 * @description Main application module that bootstraps
 * the application itself and loads main modules.
 *
 * @module app
 */
angular.module( "app", [ customers ] )
	.config( [ "$localStorageProvider", function( $localStorageProvider ) {
		$localStorageProvider.setKeyPrefix( "app-" );
	} ] );

angular.element( document ).ready( function() {
	angular.bootstrap( document.body, [ "app" ] );
} );
