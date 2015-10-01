"use strict";

var Widget = require( "../shared/widget" );

var AccountsWidget = function( browser ) {
	this.browser = browser;
};

AccountsWidget.prototype = Object.create( Widget );

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

AccountsWidget.prototype.addAccountFor = function( customerId, account ) {
	this.browser.urlHash( "customers/" + customerId + "/accounts/add" );

	this.setFieldValue( "#currency", account.currency );
	this.setFieldValue( "#total", account.total );

	this.browser.click( ".add-account" );
};

AccountsWidget.prototype.containsAccount = function( currency, total ) {
	var accountSelector = [
		"//*[contains(string(@class), 'account') and",
		" ./*[contains(text(), '",
		currency,
		"')] and ./*[contains(text(), '",
		total,
		"')]]"
	].join( "" );

	this.browser
		.useXpath()
		.expect.element( accountSelector ).to.be.present;
};

AccountsWidget.prototype.getAccountSelectorById = function( id ) {
	return "#account-" + id;
};

module.exports = AccountsWidget;
