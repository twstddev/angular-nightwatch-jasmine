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

CustomersWidget.prototype.containsCustomerId = function( id ) {
	this.browser
		.expect.element( this.getCustomerSelectorById( id ) ).to.be.present;
};

CustomersWidget.prototype.doesntContainCustomerId = function( id ) {
	this.browser
		.expect.element( this.getCustomerSelectorById( id ) ).not.to.be.present;
};

CustomersWidget.prototype.addCustomer = function( customer ) {
	this.browser.urlHash( "customers/add" );

	this.setFieldValue( "#username", customer.username );
	this.setFieldValue( "#email", customer.email );
	this.setFieldValue( "#first-name", customer.firstName );
	this.setFieldValue( "#last-name", customer.lastName );

	this.browser.click( ".add-customer" );
};

CustomersWidget.prototype.editCustomer = function( id, details ) {
	this.browser.urlHash( "customers/" + id + "/edit" );
	
	( details.username !== undefined ) && this.setFieldValue( "#username", details.username );
	( details.email !== undefined ) && this.setFieldValue( "#email", details.email );
	( details.firstName !== undefined ) && this.setFieldValue( "#first-name", details.firstName );
	( details.lastName !== undefined ) && this.setFieldValue( "#last-name", details.lastName );

	this.browser.click( ".edit-customer" );
};

CustomersWidget.prototype.setFieldValue = function( fieldName, value ) {
	this.browser
		.clearValue( fieldName )
		.setValue( fieldName, value ); 
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

CustomersWidget.prototype.getCustomerSelectorById = function( id ) {
	return "#customer-" + id;
};

module.exports = CustomersWidget;
