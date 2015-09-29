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

CustomersWidget.prototype.getCustomerSelector = function( username ) {
	return "//*[contains(string(@class), 'customer')][contains(text(), '" + username + "')]";
};

module.exports = CustomersWidget;
