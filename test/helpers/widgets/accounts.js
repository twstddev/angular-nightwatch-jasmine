"use strict";

var AccountsWidget = function( browser ) {
	this.browser = browser;
};

AccountsWidget.prototype.openListPageForCustomer = function( id ) {
	this.browser.urlHash( "customers/" + id + "/accounts" );
};

AccountsWidget.prototype.containsAccountId = function( id ) {
	this.browser
		.expect.element( this.getAccountSelectorById( id ) ).to.be.present;
};

AccountsWidget.prototype.doesntContainAccountId = function( id ) {
	this.browser
		.expect.element( this.getAccountSelectorById( id ) ).not.to.be.present;
};

AccountsWidget.prototype.getAccountSelectorById = function( id ) {
	return "#account-" + id;
};

module.exports = AccountsWidget;
