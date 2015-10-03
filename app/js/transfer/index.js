"use strict";

var angular = require( "angular" );
var angularUiRouter = require( "angular-ui-router" );
require( "ngstorage" );

var customers = require( "customers" );
var accounts = require( "accounts" );

var TransferRouter = require( "./transfer_router" );
var TransferController = require( "./transfer_controller" );

/**
 * Module containing money transfer management.
 *
 * @module Transfer
 */
angular.module( "transfer", [ angularUiRouter, "ngStorage", customers, accounts ] )
	.config( TransferRouter )
	.controller( "TransferController", TransferController );

module.exports = "transfer";
