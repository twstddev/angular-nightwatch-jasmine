"use strict";

var gulp = require( "gulp" );
var del = require( "del" );

gulp.task( "clean:build", function( done ) {
	del( [ global.getApplicationPath( "build" ) ], done );
} );

gulp.task( "clean:dist", function( done ) {
	del( [ global.getDistPath( "" ) ], done );
} );
