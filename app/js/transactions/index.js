"use strict";

var angular = require( "angular" );
var angularUiRouter = require( "angular-ui-router" );
require( "ngstorage" );

var accounts = require( "accounts" );

var TransactionsRouter = require( "./transactions_router" );
var TransactionsIndexController = require( "./transactions_index_controller" );
var Transactions = require( "./transactions_resource" );

/**
 * Module containing transactions resource management functionality
 *
 * @module Transactions
 */
angular.module( "transactions", [ angularUiRouter, "ngStorage", accounts ] )
	.config( TransactionsRouter )
	.controller( "TransactionsIndexController", TransactionsIndexController )
	.factory( "Transactions", Transactions );

module.exports = "transactions";
