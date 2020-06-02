/**
 * standard gulp build file for browser client projects
 */

'use strict';

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    plumber = require('gulp-plumber'),
    jshint = require('gulp-jshint'),
    mocha = require('gulp-mocha');

var errorHandler = function(err) {
    gutil.beep();
    console.log( err );
};

var paths = {
    src: 'lib/*.js',
    tests: 'test/*.js'
};

gulp.task('jshint', function() {
    return gulp.src([ paths.src, paths.tests ], { read:false } )
        .pipe( plumber({ errorHandler:errorHandler }) )
        .pipe( jshint() )
        .pipe( jshint.reporter('jshint-stylish') );
});

gulp.task('mocha', function() {
    return gulp.src( paths.tests, { read:false } )
        .pipe( plumber({ errorHandler:errorHandler }) )
        .pipe( mocha({ reporter:'spec' }) );
});

gulp.task('watch', function () {
    gulp.watch([paths.src, paths.tests], gulp.series('test'));
});

gulp.task('test', gulp.series('jshint', 'mocha'));

gulp.task('default', gulp.series( 'test', 'watch' ));
