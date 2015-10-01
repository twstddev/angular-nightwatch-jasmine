"use strict";

var angular = require( "angular" );
var angularUiRouter = require( "angular-ui-router" );
require( "ngstorage" );

var CustomersRouter = require( "./customers_router" );
var CustomersIndexController = require( "./controllers/customers_index" );
var CustomersAddController = require( "./controllers/customers_add" );
var CustomersEditController = require( "./controllers/customers_edit" );
var CustomersShowController = require( "./controllers/customers_show" );
var CustomerFieldsDirective = require( "./customer_fields_directive" );
var Customers = require( "./customers_resource" );
var customerIdResolver = require( "./id_resolver" );

/**
 * Module containing customers resource management functionality.
 *
 * @module Customers
 */
angular.module( "customers", [ angularUiRouter, "ngStorage" ] )
	.constant( "customerIdResolver", customerIdResolver )
	.config( CustomersRouter )
	.controller( "CustomersIndexController", CustomersIndexController )
	.controller( "CustomersAddController", CustomersAddController )
	.controller( "CustomersEditController", CustomersEditController )
	.controller( "CustomersShowController", CustomersShowController )
	.directive( "customerFields", CustomerFieldsDirective )
	.factory( "Customers", Customers );

module.exports = "customers";
