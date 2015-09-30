'use strict';

var _ = require( "lodash" );

var Application = function( browser ) {
	this.browser = browser;
};

Application.prototype.open = function() {
	this.browser.init();
};

Application.prototype.close = function( done ) {
	this.browser
		.useCss()
		.end( function() {
			done();
		} );
};

module.exports = Application;
