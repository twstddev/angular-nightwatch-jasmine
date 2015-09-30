"use strict";

var angular = require( "angular" );
var angularUiRouter = require( "angular-ui-router" );
require( "ngstorage" );

var CustomersRouter = require( "./customers_router" );
var CustomersIndexController = require( "./controllers/customers_index" );
var CustomersAddController = require( "./controllers/customers_add" );
var CustomerFieldsDirective = require( "./customer_fields_directive" );
var Customers = require( "./customers_resource" );

/**
 * Module containing customers resource management functionality.
 *
 * @module Customers
 */
angular.module( "customers", [ angularUiRouter, "ngStorage" ] )
	.config( CustomersRouter )
	.controller( "CustomersIndexController", CustomersIndexController )
	.controller( "CustomersAddController", CustomersAddController )
	.directive( "customerFields", CustomerFieldsDirective )
	.factory( "Customers", Customers );

module.exports = "customers";
