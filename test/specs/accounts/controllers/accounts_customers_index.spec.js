"use strict";

var angular = require( "angular" );
require( "angular-mocks" );
require( "accounts" );

describe( "AccountsCustomersIndexController", function() {
	var $scope;
	var accounts = [ 
		{
			id : "1",
			total : 20,
			customerId : "1"
		}, 
		{
			id : "3",
			total : 20,
			customerId : "1"
		}, 
		{
			id : "2",
			total : 10,
			customerId : "2"
		}
	];

	beforeEach( angular.mock.module( "accounts" ) );

	beforeEach( angular.mock.inject( function( $rootScope, $controller ) {
		$scope = $rootScope.$new();

		$controller( "AccountsCustomersIndexController", {
			$scope : $scope,
			Accounts : accounts,
			CustomerResolver : jasmine.createSpy( "" ).and.returnValue( { id : "1" } )
		} );
	} ) );

	it( "creates a list of accounts for the requested customer when initialised", function() {
		expect( $scope.accounts ).toBeDefined();
		expect( $scope.accounts.every( function( a ) { return a.customerId === "1"; } ) ).toBeTruthy();
	} );

	it( "removes requested account", function() {
		var firstAccount = accounts[ 0 ];
		var secondAccount = accounts[ 1 ];

		$scope.removeAccount( firstAccount );
		expect( $scope.accounts ).not.toContain( firstAccount );
		expect( $scope.accounts ).toContain( secondAccount );
	} );
} );
