"use strict";

var angular = require( "angular" );
var angularUiRouter = require( "angular-ui-router" );
require( "ngstorage" );

var CustomersRouter = require( "./customers_router" );
var CustomersIndexController = require( "./controllers/customers_index" );
var Customers = require( "./customers_resource" );

/**
 * Module containing customers resource management functionality.
 *
 * @module Customers
 */
angular.module( "customers", [ angularUiRouter, "ngStorage" ] )
	.config( CustomersRouter )
	.controller( "CustomersIndexController", CustomersIndexController )
	.factory( "Customers", Customers );

module.exports = "customers";
