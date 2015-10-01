"use strict";

module.exports = {
	Application : require( "./application" ),
	Storage : require( "./storage" ),

	CustomersWidget : require( "./widgets/customers" ),
	AccountsWidget : require( "./widgets/accounts" ),

	waitForConditionTimeout : 5000
};
