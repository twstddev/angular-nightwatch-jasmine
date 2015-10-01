"use strict";

var Widget = require( "../shared/widget" );

var AccountsWidget = function( browser ) {
	this.browser = browser;
};

AccountsWidget.prototype = Object.create( Widget );

AccountsWidget.prototype.openAccountsListPage = function() {
	this.browser.urlHash( "accounts" );
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

AccountsWidget.prototype.addAccountFor = function( customerId, account ) {
	this.browser.urlHash( "customers/" + customerId + "/accounts/add" );

	this.setFieldValue( "#currency", account.currency );
	this.setFieldValue( "#total", account.total );

	this.browser.click( ".add-account" );
};

AccountsWidget.prototype.editAccountFor = function( customerId, accountId, details ) {
	this.browser.urlHash( "customers/" + customerId + "/accounts/" + accountId + "/edit" );
	
	( details.currency !== undefined ) && this.setFieldValue( "#currency", details.currency );
	( details.total !== undefined ) && this.setFieldValue( "#total", details.total );

	this.browser.click( ".edit-account" );
};

AccountsWidget.prototype.removeAccount = function( id ) {
	this.browser.click( this.getAccountSelectorById( id ) + " .remove-account" );
};

AccountsWidget.prototype.depositTo = function( id, deposit ) {
	this.setFieldValue( this.getAccountSelectorById( id ) + " .amount-field", deposit );
	this.browser.click( this.getAccountSelectorById( id ) + " .deposit" );
};

AccountsWidget.prototype.withdrawFrom = function( id, withdraw ) {
	this.setFieldValue( this.getAccountSelectorById( id ) + " .amount-field", withdraw );
	this.browser.click( this.getAccountSelectorById( id ) + " .withdraw" );
};

AccountsWidget.prototype.containsAccount = function( currency, total ) {
	this.browser
		.useXpath()
		.expect.element( this.getAccountSelector( currency, total) ).to.be.present;
};

AccountsWidget.prototype.doesntContainAccount = function( currency, total ) {
	this.browser
		.useXpath()
		.expect.element( this.getAccountSelector( currency, total) ).not.to.be.present;
};

AccountsWidget.prototype.getAccountSelector = function( currency, total ) {
	return [
		"//*[contains(string(@class), 'account') and",
		" ./*[contains(text(), '",
		currency,
		"')] and ./*[contains(text(), '",
		total,
		"')]]"
	].join( "" );
};

AccountsWidget.prototype.getAccountSelectorById = function( id ) {
	return "#account-" + id;
};

module.exports = AccountsWidget;
