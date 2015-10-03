"use strict";

var TransactionWidget = function( browser ) {
	this.browser = browser;
};

TransactionWidget.prototype.openListPageForAccount = function( id ) {
	this.browser.urlHash( "accounts/" + id + "/transactions" );
};

TransactionWidget.prototype.containsTransaction = function( amount ) {
	this.browser
		.useXpath()
		.expect.element( this.getTransactionSelector( amount ) ).to.be.present;
};

TransactionWidget.prototype.doesntContainTransaction = function( amount ) {
	this.browser
		.useXpath()
		.expect.element( this.getTransactionSelector( amount ) ).not.to.be.present;
};

TransactionWidget.prototype.getTransactionSelector = function( amount ) {
	return "//*[contains(string(@class), 'transaction') and ./*[contains(text(), '" + amount + "')]]";
};

module.exports = TransactionWidget;
