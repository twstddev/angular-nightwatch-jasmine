"use strict";

var LocalStorageInjector = function( browser ) {
	this.browser = browser;
};

LocalStorageInjector.prototype.addCustomers = function( customers ) {
	this.browser.execute( function( customers ) {
		window.localStorage.setItem( "app-customers", JSON.stringify( customers ) );
	}, [ customers ] );
};

module.exports = LocalStorageInjector;
