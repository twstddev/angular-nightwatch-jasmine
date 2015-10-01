"use strict";

module.exports = {
	containsError : function( message ) {
		this.browser
			.useXpath()
			.expect.element( this.getErrorSelector( message ) ).to.be.present;
	},

	getErrorSelector : function( message ) {
		return "//*[contains(string(@class), 'alert')][contains(text(), '" + message + "')]";
	},

	setFieldValue : function( fieldName, value ) {
		this.browser
			.clearValue( fieldName )
			.setValue( fieldName, value ); 
	}
};
