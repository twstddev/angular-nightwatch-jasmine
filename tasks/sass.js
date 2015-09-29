"use strict";

var gulp = require( "gulp" );
var sass = require( "gulp-sass" );
var debug = require( "gulp-debug" );

var compileSass = function( env ) {
	var pathsToInclude = [
	];

	return gulp.src( global.getApplicationPath( "sass/main.scss" ) )
		.pipe( sass( {
			includePaths : pathsToInclude,
			errLogToConsole : true
		} ) )
		.pipe( gulp.dest( global.getApplicationPath( "css/" ) ) );
};

gulp.task( "sass:production", function() {
	return compileSass( "production" );
} );

gulp.task( "sass", function() {
	return compileSass( "development" );
} );

gulp.task( "sass:watch", [ "sass" ], function() {
	return gulp.watch( global.getApplicationPath( "sass/**/**.scss" ), [ "sass" ] );
} );
