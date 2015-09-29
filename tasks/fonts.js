"use strict";

var gulp = require( "gulp" );

var pathsToInclude = [
];

gulp.task( "fonts:build", function() {
	return gulp.src( pathsToInclude )
		.pipe( gulp.dest( global.getApplicationPath( "assets/fonts" ) ) );
} );
