"use strict";

var gulp = require( "gulp" );
var templateCache = require( "gulp-angular-templatecache" );
var templateFiles = global.getApplicationPath( "templates/**/**.html" );

gulp.task( "templates:angular", function() {
	return gulp.src( templateFiles )
		.pipe( templateCache() )
		.pipe( gulp.dest( global.getApplicationPath( "js" ) ) );
} );

gulp.task( "templates:angular:watch", [ "templates:angular" ], function() {
	return gulp.watch( templateFiles, [ "templates:angular" ] );
} );
