"use strict";

var angular = require( "angular" );

/**
 * Implements directive that shares customer editing fields
 * between new and edit pages.
 *
 * @name CustomerFieldsDirective
 * @memberof module:Customers
 */
module.exports = function() {
	return {
		restrict : "E",
		replace : true,
		template : require( "templates/customers/customer_fields.html" )
	};
};
