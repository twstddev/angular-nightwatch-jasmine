"use strict";

/**
 * A router that registers and manages following routes:
 * - __/transfer__ - page containing form to perform money transfer between accounts
 *
 * @name TransferRouter
 * @memberof module:Transfer
 */
module.exports = [ "$stateProvider", function( $stateProvider ) {
	$stateProvider
		.state( "transfer", {
			url : "/transfer",
			data : {
				level : "transfer"
			},
			views : {
				main : {
					template : require( "templates/transfer/index.html" ),
					controller : "TransferController"
				}
			}
		} );
} ];
