"use strict";

var gulp = require( "gulp" );
var browserSync = require( "browser-sync" ).create();

gulp.task( "server", function() {
	var filesToWatch = [
		global.getApplicationPath( "**/**.html" ),
		global.getApplicationPath( "build/js/bundle.js" ),
		global.getApplicationPath( "assets/**/**" )
	];

	browserSync.init( {
		files : [
			global.getApplicationPath( "**/**.css" ),
		],
		server : {
			baseDir : global.config.baseDir
		}
	} );

	gulp.watch( filesToWatch, function() {
		browserSync.reload();
	} );
} );

gulp.task( "server:dist", function() {
	browserSync( {
		server : {
			baseDir : global.getDistPath( "" )
		}
	} );
} );
