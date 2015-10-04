"use strict";

var gulp = require( "gulp" );

var pathsToInclude = [
	global.getNpmPath( "bootstrap-sass/assets/fonts/**/*.*" ),
	global.getNpmPath( "font-awesome/fonts/**/*.*" )
];

gulp.task( "fonts:build", function() {
	return gulp.src( pathsToInclude )
		.pipe( gulp.dest( global.getApplicationPath( "assets/fonts" ) ) );
} );
