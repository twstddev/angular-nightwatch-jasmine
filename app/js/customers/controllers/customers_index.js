"use strict";

var angular = require( "angular" );

/**
 * Implements customers controller that manages index page.
 *
 * @class CustomerIndexController
 * @memberof module:Customers
 */
var CustomersIndexController = function( $scope, Customers ) {
	$scope.customers = Customers;
};

module.exports = [ "$scope", "Customers", CustomersIndexController ];
