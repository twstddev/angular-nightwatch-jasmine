"use strict";

var gulp = require( "gulp" );
var browserify = require( "browserify" );
var watchify = require( "watchify" );
var source = require( "vinyl-source-stream" );
var buffer = require( "vinyl-buffer" );
var sourcemaps = require( "gulp-sourcemaps" );
var preprocessify = require( "preprocessify" );

// create original browserify handler
var browserifyConfig = watchify.args;
browserifyConfig.debug = true;
browserifyConfig.paths = [
	global.getApplicationPath( "js" ),
	global.getApplicationPath( "" )
];

var createBundler = function() {
	var bundler = browserify( "./" + global.getApplicationPath( "js/main.js" ), browserifyConfig );
	bundler.transform( "browserify-shim" );
	bundler.transform( "partialify" );

	return bundler;
};

var bundle = function( bundler ) {
	return bundler.bundle()
		.on( "error", function( error ) {
			console.log( error.message );
		} )
		.pipe( source( "bundle.js" ) )
		.pipe( buffer() )
		.pipe( sourcemaps.init( { loadMaps : true } ) )
		.pipe( sourcemaps.write( "./" ) )
		.pipe( gulp.dest( global.getApplicationPath( "build/js" ) ) );
};


gulp.task( "scripts:build", function() {
	var bundler = createBundler();
	bundler.transform( preprocessify( {
	} ) );

	return bundle( bundler );
} );

gulp.task( "scripts:watch", function() {
	var watchifyBundler = watchify( createBundler(), {
		debug : true,
		basedir : global.getApplicationPath( "js" )
	} );

	watchifyBundler.transform( preprocessify( {
	} ) );

	watchifyBundler.on( "update", function() {
		bundle( watchifyBundler );
	} );

	return bundle( watchifyBundler );
} );
