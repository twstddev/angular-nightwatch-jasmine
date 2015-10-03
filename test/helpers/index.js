"use strict";

module.exports = {
	Application : require( "./application" ),
	Storage : require( "./storage" ),

	CustomersWidget : require( "./widgets/customers" ),
	AccountsWidget : require( "./widgets/accounts" ),
	TransactionWidget : require( "./widgets/transactions" ),
	TransferWidget : require( "./widgets/transfer" ),

	waitForConditionTimeout : 5000
};
