"use strict";

var angular = require( "angular" );

/**
 * Implements accounts controller that handles generic accounts index page.
 *
 * @class AccountsIndexController
 * @memberof module:Accounts
 */
var AccountsIndexController = function( $scope, Accounts, Transactions ) {
	var addTransaction = function( transaction ) {
		transaction.created = Date.now();
		Transactions.push( transaction );
	};

	$scope.accounts = Accounts;
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
		$scope.clearErrors();

		if ( ( +withdraw ) <= account.total ) {
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
};

module.exports = [ "$scope", "Accounts", "Transactions", AccountsIndexController ];
