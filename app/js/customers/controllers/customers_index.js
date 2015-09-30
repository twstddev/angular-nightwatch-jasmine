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

	/**
	 * Removes given customer from the list of customers.
	 *
	 * @inner
	 * @function removeCustomer
	 * @memberof module:Customers.CustomerIndexController
	 */
	$scope.removeCustomer = function( customer ) {
		$scope.customers.splice( $scope.customers.indexOf( customer ), 1 );
	};
};

module.exports = [ "$scope", "Customers", CustomersIndexController ];
