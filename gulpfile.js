/**
 * npm modules
 */
const gulp = require('gulp');

/**
* task modules
*/
const EJS_BUILD = require('./tasks/ejs-build');

/**
* gulp tasks
*/
gulp.task('ejsBuild', gulp.series(EJS_BUILD));
