"use strict";

var angular = require( "angular" );
require( "angular-mocks" );
require( "customers" );

describe( "CustomerFieldsDirective", function() {
	var $scope;
	var form;

	beforeEach( angular.mock.module( "customers" ) );

	beforeEach( angular.mock.inject( function( $rootScope, $compile ) {
		$scope = $rootScope.$new();
		$scope.customer = {};

		$compile( "<form name='form'><customer-fields></customer-fields></form>" )( $scope );
		$scope.$digest();

		form = $scope.form;
	} ) );

	describe( "username field", function() {
		it( "assign to customer model", function() {
			var username = "user1";

			form.username.$setViewValue( username );
			expect( $scope.customer.username ).toBe( username );
			expect( form.username.$valid ).toBeTruthy();
		} );

		it( "is required", function() {
			form.username.$setViewValue( "" );
			expect( form.username.$valid ).toBeFalsy();
		} );
	} );

	describe( "email field", function() {
		it( "assigns to customer model", function() {
			var email = "user@user.org";

			form.email.$setViewValue( email );
			expect( $scope.customer.email ).toBe( email );
			expect( form.email.$valid ).toBeTruthy();
		} );

		it( "is required", function() {
			form.email.$setViewValue( "" );
			expect( form.email.$valid ).toBeFalsy();
		} );

		it( "must be valid", function() {
			form.email.$setViewValue( "email" );
			expect( form.email.$valid ).toBeFalsy();
		} );
	} );

	describe( "first name field", function() {
		it( "assigns to customer model", function() {
			var firstName = "name";

			form.firstName.$setViewValue( firstName );
			expect( $scope.customer.firstName ).toBe( firstName );
			expect( form.firstName.$valid ).toBeTruthy();
		} );

		it( "is required", function() {
			form.firstName.$setViewValue( "" );
			expect( form.firstName.$valid ).toBeFalsy();
		} );
	} );

	describe( "last name field", function() {
		it( "assigns to customer model", function() {
			var lastName = "name";

			form.lastName.$setViewValue( lastName );
			expect( $scope.customer.lastName ).toBe( lastName );
			expect( form.lastName.$valid ).toBeTruthy();
		} );

		it( "is required", function() {
			form.lastName.$setViewValue( "" );
			expect( form.lastName.$valid ).toBeFalsy();
		} );
	} );
} );
