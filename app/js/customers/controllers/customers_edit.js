"use strict";

var angular = require( "angular" );
var _ = require( "lodash" );

/**
 * Implements controller that manages edit page.
 *
 * @class CustomersEditController
 * @memberof module:Customers
 */
var CustomersEditController = function( $scope, CustomerResolver, $state ) {
	var originalCustomer = CustomerResolver();

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
	"CustomerResolver",
	"$state",
	CustomersEditController ];
