"use strict";

var _ = require( "lodash" );

/**
 * Service that performs users authentication
 *
 * @name AuthenticationService
 * @memberof module:Authentication
 */
var AuthenticationServive = function( config, Customers ) {
	var usersForCustomers = Customers.map( function( customer ) {
		return {
			username : customer.username,
			role : "customer",
			id : customer.id
		};
	} );
	var users = config.users.concat( usersForCustomers );


	/**
	 * Authenticates given credentials and creates accessible user
	 * in the service.
	 *
	 * @inner
	 * @function authenticate
	 * @memberof module:Authentication.AuthenticationService
	 */
	this.authenticate = function( credentials ) {
		this.user = _.find( users, { username : credentials.username } );

		return this.user && config.roles[ this.user.role ].password === credentials.password;
	};
};

module.exports = [ "ApplicationConfig", "Customers", AuthenticationServive ];
