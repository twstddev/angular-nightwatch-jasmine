"use strict";

var angular = require( "angular" );
var angularUiRouter = require( "angular-ui-router" );

var LoginRouter = require( "./login_router" );
var LoginController = require( "./login_controller" );
var AuthenticationService = require( "./authentication_service" );

/**
 * Authentication module which is responsible for the login page route and 
 * controller registration.
 * Module verifies user login details and permission level for requested resources.
 *
 * @module Authentication
 */
angular.module( "authentication", [ angularUiRouter ] )
	.config( LoginRouter )
	.controller( "LoginController", LoginController )
	.service( "AuthenticationService", AuthenticationService )
	// prevent not logged in users from accessing application
	.run( [ "$state", "AuthenticationService", "$rootScope",
		 function( $state, AuthenticationService, $rootScope ) {
			 $rootScope.$on( "$stateChangeStart", function( event, next ) {
				 if ( next.name !== "login" && !AuthenticationService.user ) {
					 event.preventDefault();
					 $state.go( "login" );
				 }
			 } );
	} ] )
	// restrict access to not permitted levele
	.run( [ "$state", "AuthenticationService", "$rootScope", "ApplicationConfig",
		 function( $state, AuthenticationService, $rootScope, config ) {
			 $rootScope.$on( "$stateChangeStart", function( event, next ) {
				 var routeAccessLevel = next.data && next.data.level;
				 var allowedLevels = AuthenticationService.user && config.roles[ AuthenticationService.user.role ].permissions;
				 var isRouteForbidden = allowedLevels && !~allowedLevels.indexOf( routeAccessLevel );

				 if ( isRouteForbidden ) {
					 event.preventDefault();
				 }
			 } );
	} ]);

module.exports = "authentication";
