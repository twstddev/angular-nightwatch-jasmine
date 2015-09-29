"use strict";

var gulp = require( "gulp" );
var path = require( "path" );
var runSequence = require( "run-sequence" );

global.config = {
	baseDir : "app"
};

global.getApplicationPath = function( relativePath ) {
	return path.join( global.config.baseDir, relativePath );
};

global.getDistPath = function( relativePath ) {
	return path.join( "dist", relativePath );
};

global.getNpmPath = function( relativePath ) {
	return path.join( "node_modules", relativePath );
};

require( "require-dir" )( "./tasks" );

gulp.task( "default", function( done ) {
	runSequence(
		"clean:dist",
		"fonts:build",
		"scripts:build",
		"sass:production",
		"usemin",
		"assets",
		done );
} );

gulp.task( "development", function( done ) {
	runSequence( 
		"clean:build",
		"fonts:build",
		"scripts:watch",
		[
			"server",
			"sass:watch"
		],
		done );
} );

