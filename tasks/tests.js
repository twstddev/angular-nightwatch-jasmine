"use strict";

var gulp = require( "gulp" );
var KarmaServer = require( "karma" ).Server;
var path = require( "path" );
var connect = require( "gulp-connect" );
var runSequence = require( "run-sequence" );
var nightwatch = require( "nightwatch" );

var karmaConfig = {
	configFile : path.join( __dirname + "/../karma.conf.js" )
};

gulp.task( "test:specs:single", function( done ) {
	karmaConfig.singleRun = true;
	new KarmaServer( karmaConfig, done ).start();
} );

gulp.task( "test:specs", function( done ) {
	new KarmaServer( karmaConfig, done ).start();
} );

gulp.task( "test:acceptance:server", function() {
	connect.server( {
		root : "app",
		port : 8000
	} );
} );

gulp.task( "test:acceptance", [ "test:acceptance:server" ], function( done ) {
	nightwatch.cli( function( argv ) {
		nightwatch.runner( argv, function() {
			connect.serverClose();
			done();
		} );
	} );
} );

