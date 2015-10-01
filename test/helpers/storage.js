"use strict";

var LocalStorageInjector = function( browser ) {
	this.browser = browser;
};

LocalStorageInjector.prototype.addCustomers = function( customers ) {
	this.browser.execute( function( customers ) {
		window.localStorage.setItem( "app-customers", JSON.stringify( customers ) );
	}, [ customers ] );
};

LocalStorageInjector.prototype.addAccounts = function( accounts ) {
	this.browser.execute( function( accounts ) {
		window.localStorage.setItem( "app-accounts", JSON.stringify( accounts ) );
	}, [ accounts ] );
};


module.exports = LocalStorageInjector;
