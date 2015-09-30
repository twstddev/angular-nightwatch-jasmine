"use strict";

var angular = require( "angular" );
var guid = require( "guid" );

/**
 * Implements controller that manages add page.
 *
 * @class CustomersAddController
 * @memberof module:Customers
 */
var CustomersAddController = function( $scope, Customers, $state ) {
	$scope.customer = {
		id : guid.raw()
	};
	
	/**
	 * Adds currently exposed customer on the scope to the 
	 * Customers resource.
	 *
	 * @inner
	 * @function createCustomer
	 * @memberof module:Customers.CustomersAddController
	 */
	$scope.createCustomer = function() {
		Customers.push( $scope.customer );

		// we are done, let's take user back to the customers index page
		$state.go( "customers.list" );
	};
};

module.exports = [ "$scope", "Customers", "$state", CustomersAddController ];
