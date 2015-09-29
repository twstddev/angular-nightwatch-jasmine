"use strict";

var gulp = require( "gulp" );
var usemin = require( "gulp-usemin" );
var csso = require( "gulp-csso" );
var rev = require( "gulp-rev" );
var uglify = require( "gulp-uglify" );
var minifyHtml = require( "gulp-minify-html" );
var war = require( "gulp-war" );
var zip = require( "gulp-zip" );

gulp.task( "usemin", function() {
	return gulp.src( global.getApplicationPath( "index.html" ) )
		.pipe( usemin( {
			css : [ csso(), rev() ],
			html : [ minifyHtml( { empty : true } ) ],
			js : [ uglify(), rev() ]
		} ) )
		.pipe( gulp.dest( global.getDistPath( "" ) ) );
} );

gulp.task( "assets", function() {
	return gulp.src( global.getApplicationPath( "assets/**/*" ) )
		.pipe( gulp.dest( global.getDistPath( "assets" ) ) );
} );
