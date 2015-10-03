"use strict";

module.exports = {
	Application : require( "./application" ),
	Storage : require( "./storage" ),

	CustomersWidget : require( "./widgets/customers" ),
	AccountsWidget : require( "./widgets/accounts" ),
	TransactionWidget : require( "./widgets/transactions" ),
	TransferWidget : require( "./widgets/transfer" ),
	LoginWidget : require( "./widgets/login" ),

	waitForConditionTimeout : 5000
};
