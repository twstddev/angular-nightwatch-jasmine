"use strict";

var CustomersWidget = function( browser ) {
	this.browser = browser;
};

CustomersWidget.prototype.openListPage = function() {
	this.browser.urlHash( "customers" );
};

CustomersWidget.prototype.containsCustomer = function( username ) {
	this.browser
		.useXpath()
		.expect.element( this.getCustomerSelector( username ) ).to.be.present;
};

CustomersWidget.prototype.doesntContainCustomer = function( username ) {
	this.browser
		.useXpath()
		.expect.element( this.getCustomerSelector( username ) ).not.to.be.present;
};

CustomersWidget.prototype.addCustomer = function( customer ) {
	this.browser.urlHash( "customers/add" )
		.setValue( "#username", customer.username )
		.setValue( "#email", customer.email )
		.setValue( "#first-name", customer.firstName )
		.setValue( "#last-name", customer.lastName )
		.click( ".add-customer" );
};

CustomersWidget.prototype.containsError = function( message ) {
	this.browser
		.useXpath()
		.expect.element( this.getErrorSelector( message ) ).to.be.present;
};

CustomersWidget.prototype.getErrorSelector = function( message ) {
	return "//*[contains(string(@class), 'alert')][contains(text(), '" + message + "')]";
};


CustomersWidget.prototype.getCustomerSelector = function( username ) {
	return "//*[contains(string(@class), 'customer')][contains(text(), '" + username + "')]";
};

module.exports = CustomersWidget;
