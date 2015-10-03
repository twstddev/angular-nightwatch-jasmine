"use strict";

var angular = require( "angular" );
require( "angular-mocks" );
require( "authentication" );

var ApplicationConfig = require( "config.json" );

describe( "LoginController", function() {
	var $scope;
	var $rootScope;
	var $state = {};
	var AuthenticationService = {};

	beforeEach( angular.mock.module( "authentication", function( $provide ) {
		$provide.constant( "ApplicationConfig", ApplicationConfig );
		$provide.factory( "Customers", function() { return []; } );
	} ) );

	beforeEach( angular.mock.inject( function( $rootScope, $controller, $q ) {
		$state.go = jasmine.createSpy( "go" );
		$scope = $rootScope.$new();
		$scope.form = {
			$valid : true
		};

		AuthenticationService.authenticate = jasmine.createSpy( "authenticate" ).and.returnValue( true );

		$controller( "LoginController", {
			$scope : $scope,
			$state : $state,
			AuthenticationService : AuthenticationService
		} );
	} ) );

	it( "doesn't redirect if user cannot be authenticated", function() {
		AuthenticationService.authenticate = jasmine.createSpy( "authenticate" ).and.returnValue( false );

		$scope.login();
		expect( $state.go ).not.toHaveBeenCalled();
	} );

	it( "exposes invalid credentials message if user cannot be authenticated", function() {
		AuthenticationService.authenticate = jasmine.createSpy( "authenticate" ).and.returnValue( false );

		$scope.login();
		expect( $scope.error ).toBeDefined();
		expect( $scope.error ).toContain( "Invalid credentials" );
	} );

	it( "passes credentials to authentication service", function() {
		$scope.username = ApplicationConfig.users[ 0 ].username;
		$scope.password = "123456";
		AuthenticationService.user = ApplicationConfig.users[ 0 ];
		$scope.login();

		expect( AuthenticationService.authenticate ).toHaveBeenCalled();
		expect( AuthenticationService.authenticate ).toHaveBeenCalledWith( jasmine.objectContaining( {
			username : $scope.username,
			password : $scope.password
		} ) );
	} );
} );
