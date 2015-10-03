"use strict";

var angular = require( "angular" );
var _ = require( "lodash" );

/**
 * Implements controller that manages edit page.
 *
 * @class AccountsCustomersEditController
 * @memberof module:Accounts
 */
var AccountsCustomersEditController = function( $scope, Accounts, CustomerResolver, AccountResolver, $state ) {
	var originalAccount = _.findWhere( Accounts, { id : AccountResolver().id, customerId : CustomerResolver().id } );

	$scope.account = angular.copy( originalAccount );

	/**
	 * Updates given account with provided details from scope.
	 *
	 * @inner
	 * @function updateAccount
	 * @memberof module:Accounts.AccountsCustomersEditController
	 */
	$scope.updateAccount = function() {
		_.extend( originalAccount, $scope.account );

		// we are done, let's take user back to the accounts index page
		$state.go( "customers.accounts.list" );
	};
};

module.exports = [ 
	"$scope",
	"Accounts",
	"CustomerResolver",
	"AccountResolver",
	"$state",
	AccountsCustomersEditController ];
