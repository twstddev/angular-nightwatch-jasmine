"use strict";

var angular = require( "angular" );
require( "angular-mocks" );
require( "accounts" );

describe( "AccountsFieldsDirective", function() {
	var $scope;
	var form;

	beforeEach( angular.mock.module( "accounts" ) );

	beforeEach( angular.mock.inject( function( $rootScope, $compile ) {
		$scope = $rootScope.$new();
		$scope.account = {};

		$compile( "<form name='form'><account-fields></account-fields></form>" )( $scope );
		$scope.$digest();

		form = $scope.form;
	} ) );

	describe( "currency field", function() {
		it( "assigns to account model", function() {
			var currency = "£";

			form.currency.$setViewValue( currency );
			expect( $scope.account.currency ).toBe( currency );
			expect( form.currency.$valid ).toBeTruthy();
		} );

		it( "is required", function() {
			form.currency.$setViewValue( "" );
			expect( form.currency.$valid ).toBeFalsy();
		} );
	} );

	describe( "total field", function() {
		it( "assigns to account model", function() {
			var total = 10;

			form.total.$setViewValue( total );
			expect( $scope.account.total ).toBe( total );
			expect( form.total.$valid ).toBeTruthy();
		} );

		it( "is required", function() {
			form.total.$setViewValue( "" );
			expect( form.total.$valid ).toBeFalsy();
		} );
	} );
} );
