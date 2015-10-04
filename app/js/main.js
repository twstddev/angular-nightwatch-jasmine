"use strict";

var angular = require( "angular" );
var angularAnimate = require( "angular-animate" );

var customers = require( "js/customers" );
var accounts = require( "js/accounts" );
var transactions = require( "js/transactions" );
var transfer = require( "js/transfer" );
var authentication = require( "js/authentication" );
var ApplicationConfig = require( "config.json" );

/**
 * @description Main application module that bootstraps
 * the application itself and loads main modules.
 *
 * @module app
 */
angular.module( "app", [ customers, accounts, transactions, transfer, authentication, angularAnimate ] )
	.constant( "ApplicationConfig", ApplicationConfig )
	.config( [ "$localStorageProvider", function( $localStorageProvider ) {
		$localStorageProvider.setKeyPrefix( "app-" );
	} ] )
	.run( [ "$rootScope", function( $rootScope ) {
		$rootScope.appReady = true;
	} ] );

angular.element( document ).ready( function() {
	angular.bootstrap( document.body, [ "app" ] );
} );
