"use strict";

var angular = require( "angular" );
var _ = require( "lodash" );

/**
 * Implements controller that manages show customer page.
 *
 * @class CustomersShowController
 * @memberof module:Customers
 */
var CustomersShowController = function( $scope, Customers, customerId ) {
	$scope.customer = _.findWhere( Customers, { id : customerId } );
};

module.exports = [ "$scope", "Customers", "customerId", CustomersShowController ];
