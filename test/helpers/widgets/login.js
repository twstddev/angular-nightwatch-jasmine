"use strict";

var Widget = require( "../shared/widget" );

var LoginWidget = function( browser ) {
	this.browser = browser;
};

LoginWidget.prototype = Object.create( Widget );

LoginWidget.prototype.open = function() {
	this.browser.urlHash( "login" );
};

LoginWidget.prototype.login = function( username, password ) {
	this.setFieldValue( "#username", username );
	this.setFieldValue( "#password", password );
	this.browser.click( ".login" );
};

LoginWidget.prototype.loginAsBank = function() {
	this.login( "bank", "123456" );
};

LoginWidget.prototype.loginAsCustomer = function() {
	this.login( "customer", "123456" );
};

module.exports = LoginWidget;
