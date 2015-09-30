"use strict";

var angular = require( "angular" );
var _ = require( "lodash" );

/**
 * Implements controller that manages edit page.
 *
 * @class CustomersEditController
 * @memberof module:Customers
 */
var CustomersEditController = function( $scope, Customers, customerId, $state ) {
	var originalCustomer = _.findWhere( Customers, { id : customerId } );

	$scope.customer = angular.copy( originalCustomer );

	/**
	 * Updates given customer with provided details from scope.
	 *
	 * @inner
	 * @function updateCustomer
	 * @memberof module:Customers.CustomersEditController
	 */
	$scope.updateCustomer = function() {
		_.extend( originalCustomer, $scope.customer );

		// we are done, let's take user back to the customers index page
		$state.go( "customers.list" );
	};
};

module.exports = [ 
	"$scope",
	"Customers",
	"customerId",
	"$state",
	CustomersEditController ];
