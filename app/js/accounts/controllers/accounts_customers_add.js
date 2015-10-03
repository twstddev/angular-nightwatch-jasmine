"use strict";

var angular = require( "angular" );
var guid = require( "guid" );

/**
 * Implements controller that manages add page.
 *
 * @class AccountsCustomersAddController
 * @memberof module:Accounts
 */
var AccountsCustomersAddController = function( $scope, Accounts, CustomerResolver, $state ) {
	$scope.account = {
		id : guid.raw(),
		total : 0,
		customerId : CustomerResolver().id
	};
	
	/**
	 * Adds currently exposed account on the scope to the 
	 * Accounts resource.
	 *
	 * @inner
	 * @function createAccount
	 * @memberof module:Accounts.AccountsCustomersAddController
	 */
	$scope.createAccount = function() {
		Accounts.push( $scope.account );

		// we are done, let's take user back to the accounts index page
		$state.go( "customers.accounts.list" );
	};
};

module.exports = [ 
	"$scope",
	"Accounts",
	"CustomerResolver",
	"$state",
	AccountsCustomersAddController ];
