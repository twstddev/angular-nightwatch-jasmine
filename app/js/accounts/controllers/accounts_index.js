"use strict";

var angular = require( "angular" );
var _ = require( "lodash" );

/**
 * Implements accounts controller that handles generic accounts index page.
 *
 * @class AccountsIndexController
 * @memberof module:Accounts
 */
var AccountsIndexController = function( $scope, Accounts, Transactions, AuthenticationService ) {
	var addTransaction = function( transaction ) {
		transaction.created = Date.now();
		Transactions.push( transaction );
	};

	$scope.accounts = _.where( Accounts, { customerId : AuthenticationService.user.id } );
	$scope.errors = [];

	/**
	 * Adds given amount of money to specified account.
	 *
	 * @param {Object} account
	 * @param {String|Number} deposit
	 * @inner
	 * @function depositToAccount
	 * @memberof module:Accounts.AccountsIndexController
	 */
	$scope.depositToAccount = function( account, deposit ) {
		$scope.clearErrors();

		account.total = ( +account.total ) + ( +deposit );

		addTransaction( {
			accountId : account.id,
			amount : deposit,
			action : "deposit"
		} );
	};

	/**
	 * Removes given amount of money from specified account.
	 *
	 * @param {Object} account
	 * @param {String|Number} withdraw
	 * @inner
	 * @function withdrawFromAccount
	 * @memberof module:Accounts.AccountsIndexController
	 */
	$scope.withdrawFromAccount = function( account, withdraw ) {
		var totalWithOverdraft = account.total + ( +account.overdraft );
		$scope.clearErrors();

		if ( ( +withdraw ) <= totalWithOverdraft ) {
			account.total -= withdraw;

			addTransaction( {
				accountId : account.id,
				amount : withdraw,
				action : "withdraw"
			} );
		}
		else {
			$scope.errors.push( "Account doesn't have enough money" );
		}
	};

	/**
	 * Removes all messages from the errors list.
	 *
	 * @inner
	 * @function clearErrors
	 * @memberof module:Accounts.AccountsIndexController
	 */
	$scope.clearErrors = function() {
		$scope.errors = [];
	};

	/**
	 * Resets current customer accounts totals and transactions.
	 *
	 * @inner
	 * @function reset
	 * @memberof module:Accounts.AccountsIndexController
	 */
	$scope.resetAccounts = function() {
		$scope.accounts.forEach( function( account ) {
			account.total = 0;
			_.remove( Transactions, _.matches( { accountId : account.id } ) );
		} );
	};
};

module.exports = [ "$scope", "Accounts", "Transactions", "AuthenticationService", AccountsIndexController ];
