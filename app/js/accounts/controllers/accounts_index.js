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
};

module.exports = [ "$scope", "Accounts", AccountsIndexController ];
