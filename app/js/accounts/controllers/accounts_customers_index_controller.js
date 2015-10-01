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
};

module.exports = [ "$scope", "Accounts", "customerId", AccountsCustomersIndexController ];
