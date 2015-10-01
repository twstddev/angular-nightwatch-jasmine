"use strict";

var angular = require( "angular" );
var _ = require( "lodash" );

/**
 * Implements accounts controller that handles accounts index page
 * for requested customer.
 *
 * @class AccountsCustomersIndexController
 * @memberof module:Accounts
 */
var AccountsCustomersIndexController = function( $scope, Accounts, customerId ) {
	$scope.accounts = _.where( Accounts, { customerId : customerId } );

	/**
	 * Removes given account from the list of accounts.
	 *
	 * @inner
	 * @function removeAccount
	 * @memberof module:Accounts.AccountsCustomersIndexController
	 */
	$scope.removeAccount = function( account ) {
		$scope.accounts.splice( $scope.accounts.indexOf( account ), 1 );
	};
};

module.exports = [ "$scope", "Accounts", "customerId", AccountsCustomersIndexController ];
