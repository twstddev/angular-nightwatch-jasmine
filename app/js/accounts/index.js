"use strict";

var angular = require( "angular" );
var angularUiRouter = require( "angular-ui-router" );
require( "ngstorage" );

var customers = require( "js/customers" );

var AccountsRouter = require( "./accounts_router" );
var AccountsCustomersIndexController = require( "./controllers/accounts_customers_index" );
var AccountsCustomersAddController = require( "./controllers/accounts_customers_add" );
var AccountFieldsDirective = require( "./account_fields_directive" );
var Accounts = require( "./accounts_resource" );

/**
 * Module  containing accounts resource management functionality.
 *
 * @module Accounts
 */
angular.module( "accounts", [ angularUiRouter, "ngStorage", "customers" ] )
	.config( AccountsRouter )
	.controller( "AccountsCustomersIndexController", AccountsCustomersIndexController )
	.controller( "AccountsCustomersAddController", AccountsCustomersAddController )
	.directive( "accountFields", AccountFieldsDirective )
	.factory( "Accounts", Accounts );

module.exports = "accounts";
