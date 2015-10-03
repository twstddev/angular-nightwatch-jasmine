"use strict";

var LocalStorageInjector = function( browser ) {
	this.browser = browser;
};

LocalStorageInjector.prototype.loadResource = function( name, data ) {
	this.browser.execute( function( name, data ) {
		window.localStorage.setItem( "app-" + name, JSON.stringify( data ) );
	}, [ name, data ] );
};

LocalStorageInjector.prototype.addCustomers = function( customers ) {
	this.loadResource( "customers", customers );
};

LocalStorageInjector.prototype.addAccounts = function( accounts ) {
	this.loadResource( "accounts", accounts );
};

LocalStorageInjector.prototype.addTransactions = function( transactions ) {
	this.loadResource( "transactions", transactions );
};

module.exports = LocalStorageInjector;
