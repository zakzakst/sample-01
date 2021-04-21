/**
 * npm modules
 */
const gulp = require('gulp');

/**
* task modules
*/
const EJS_BUILD = require('./tasks/ejs-build');
const IMAGE_MIN = require('./tasks/image-min');
const { SASS_BUILD, SASS_LINT } = require('./tasks/sass-build');

/**
* gulp tasks
*/
gulp.task('ejsBuild', gulp.series(EJS_BUILD));
gulp.task('imageMin', gulp.series(IMAGE_MIN));
gulp.task('sassBuild', gulp.series(SASS_BUILD));
gulp.task('sassLint', gulp.series(SASS_LINT));
