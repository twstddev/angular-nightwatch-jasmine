"use strict";

var $ = require( "jquery" );
$.fn.DataTable = require( "datatables" );
require( "datatables-bootstrap3-plugin" );

// definitions of the columns within the transactions table
var columns = [
	{ 
		title : "Created",
		data : "created",
		type : "date",
		render : {
			display : function( data ) {
				return data.toLocaleString( "en-GB" );
			}
		}
	},
	{
		title : "Amount",
		data : "amount"
	}
];

/**
 * Directive that wraps datatables library, which adds
 * additional functionality to search, sort and filter data.
 *
 * @name TransactionsDirective
 * @memberof module:Transactions
 */
var TransactionsDirective = function() {
	return {
		restrict : "E",
		replace : true,
		template : require( "templates/transactions/transactions.html" ),
		scope : {
			transactions : "="
		},
		link : {
			post : function( scope, element ) {
				$( element ).DataTable( {
					data : scope.transactions,
					columns : columns,
					order : [ [ 0, "desc" ] ],
					createdRow : function( row ) {
						row.classList.add( "transaction" );
					}
				} );
			}
		}
	};
};

module.exports = TransactionsDirective;
