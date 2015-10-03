"use strict";

var Widget = require( "../shared/widget" );

var TransferWidget = function( browser ) {
	this.browser = browser;
};

TransferWidget.prototype = Object.create( Widget );

TransferWidget.prototype.openTransferPage = function() {
	this.browser.urlHash( "transfer" );
};

TransferWidget.prototype.transferMoney = function( from, to, amount ) {
	this.selectFromCustomer( from.customerId );
	this.selectFromAccount( from.accountId );

	this.selectToCustomer( to.customerId );
	this.selectToAccount( to.accountId );

	this.transfer( amount );
};

TransferWidget.prototype.selectFromCustomer = function( customerId ) {
	this.browser.click( "#from-customer option[value='" + customerId + "']");
};

TransferWidget.prototype.selectFromAccount = function( accountId ) {
	this.browser.click( "#from-account option[value='" + accountId + "']");
};

TransferWidget.prototype.selectToCustomer = function( customerId ) {
	this.browser.click( "#to-customer option[value='" + customerId + "']");
};

TransferWidget.prototype.selectToAccount = function( accountId ) {
	this.browser.click( "#to-account option[value='" + accountId + "']");
};

TransferWidget.prototype.transfer = function( amount ) {
	this.setFieldValue( "#amount", amount );
	this.browser.click( ".transfer" );
};

module.exports = TransferWidget;
