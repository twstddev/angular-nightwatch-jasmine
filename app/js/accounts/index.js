"use strict";

var angular = require( "angular" );
var angularUiRouter = require( "angular-ui-router" );
require( "ngstorage" );

var customers = require( "js/customers" );

var AccountsRouter = require( "./accounts_router" );
var AccountsCustomersIndexController = require( "./controllers/accounts_customers_index" );
var AccountsCustomersAddController = require( "./controllers/accounts_customers_add" );
var AccountsCustomersEditController = require( "./controllers/accounts_customers_edit" );
var AccountsIndexController = require( "./controllers/accounts_index" );
var AccountFieldsDirective = require( "./account_fields_directive" );
var Accounts = require( "./accounts_resource" );
var AccountResolver = require( "./account_resolver" );

/**
 * Module  containing accounts resource management functionality.
 *
 * @module Accounts
 */
angular.module( "accounts", [ angularUiRouter, "ngStorage", "customers" ] )
	.config( AccountsRouter )
	.controller( "AccountsCustomersIndexController", AccountsCustomersIndexController )
	.controller( "AccountsCustomersAddController", AccountsCustomersAddController )
	.controller( "AccountsCustomersEditController", AccountsCustomersEditController )
	.controller( "AccountsIndexController", AccountsIndexController )
	.directive( "accountFields", AccountFieldsDirective )
	.factory( "Accounts", Accounts )
	.factory( "AccountResolver", AccountResolver );

module.exports = "accounts";
