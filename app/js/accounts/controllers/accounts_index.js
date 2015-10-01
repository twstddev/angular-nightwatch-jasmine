"use strict";

var angular = require( "angular" );

/**
 * Implements accounts controller that handles generic accounts index page.
 *
 * @class AccountsIndexController
 * @memberof module:Accounts
 */
var AccountsIndexController = function( $scope, Accounts ) {
	$scope.accounts = Accounts;

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
		account.total = ( +account.total ) + ( +deposit );
	};
};

module.exports = [ "$scope", "Accounts", AccountsIndexController ];
