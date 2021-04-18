/**
 * npm modules
 */
const gulp = require('gulp');

/**
* task modules
*/
const EJS_BUILD = require('./tasks/ejs-build');
const IMAGE_MIN = require('./tasks/image-min');

/**
* gulp tasks
*/
gulp.task('ejsBuild', gulp.series(EJS_BUILD));
gulp.task('imageMin', gulp.series(IMAGE_MIN));
