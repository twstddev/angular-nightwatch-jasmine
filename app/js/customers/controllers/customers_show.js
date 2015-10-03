"use strict";

var angular = require( "angular" );
var _ = require( "lodash" );

/**
 * Implements controller that manages show customer page.
 *
 * @class CustomersShowController
 * @memberof module:Customers
 */
var CustomersShowController = function( $scope, CustomerResolver) {
	$scope.customer = CustomerResolver();
};

module.exports = [ "$scope", "CustomerResolver", CustomersShowController ];
