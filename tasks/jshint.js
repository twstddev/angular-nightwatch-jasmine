"use strcit";

var gulp = require( "gulp" );
var jshint = require( "gulp-jshint" );
var filesToHint = global.getApplicationPath( "js/**/**.js" );

gulp.task( "jshint", function() {
	return gulp.src( filesToHint )
		.pipe( jshint() )
		.pipe( jshint.reporter( "jshint-stylish" ) );
} );

gulp.task( "jshint:watch", [ "jshint" ], function() {
	return gulp.watch( filesToHint, [ "jshint" ] );
} );
