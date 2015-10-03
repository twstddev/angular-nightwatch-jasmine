"use strict";

var angular = require( "angular" );
var _ = require( "lodash" );

/**
 * Implements controller that manages money transferring page.
 *
 * @class TransferController
 * @memberof module:Transfer
 */
var TransferController = function( $scope, Customers, Accounts ) {
	$scope.customers = Customers;
	$scope.accounts = Accounts;

	$scope.to = {
	};

	$scope.from = {
	};

	/**
	 * Returns list of accounts for the given customer.
	 *
	 * @param {Object} customer
	 * @returns {Array}
	 * @inner
	 * @function getAccountsForCustomer
	 * @memberof module:Transfer.TransferController
	 */
	$scope.getAccountsForCustomer = function( customer ) {
		return _.where( Accounts, { customerId : customer.id } );
	};

	/**
	 * Transfers given amount between accounts.
	 *
	 * @param {Number} amount
	 * @inner
	 * @function transfer
	 * @memberof module:Transfer.TransferController
	 */
	$scope.transfer = function( amount ) {
		$scope.to.account.total += amount;
		$scope.from.account.total -= amount;
	};
};

module.exports = [ "$scope", "Customers", "Accounts", TransferController ];
