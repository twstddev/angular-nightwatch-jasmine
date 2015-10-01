"use strict";

var angular = require( "angular" );

/**
 * Implements directive that shares account editing fields
 * between new and edit pages.
 *
 * @name AccountFieldsDirective
 * @memberof module:Accounts
 */
module.exports = function() {
	return {
		restrict : "E",
		replace : true,
		template : require( "templates/accounts/account_fields.html" )
	};
};
