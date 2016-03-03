var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

var outputDir = 'public/';

var jsSources = [
  'node_modules/es6-shim/es6-shim.min.js',
  'node_modules/es6-shim/es6-shim.map',
  'node_modules/systemjs/dist/system-polyfills.js',
  'node_modules/systemjs/dist/system-polyfills.map',
  'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',
  'node_modules/angular2/es6/dev/src/testing/shims_for_IE.map',
  'node_modules/angular2/bundles/angular2-polyfills.js',
  'node_modules/angular2/bundles/angular2-polyfills.map',
  'node_modules/systemjs/dist/system.src.js',
  'node_modules/systemjs/dist/system-polyfills.js.map',
  'node_modules/rxjs/bundles/Rx.js',
  'node_modules/rxjs/bundles/Rx.map',
  'node_modules/angular2/bundles/angular2.dev.js',
  'node_modules/angular2/bundles/angular2.dev.map',
];

var cssSources = [
  'node_modules/bootstrap/dist/css/bootstrap.css',
  'node_modules/bootstrap/dist/css/bootstrap.css.map'
]

gulp.task('js', function() {
    return gulp
        .src(jsSources, {base: 'node_modules'})
        .pipe(gulp.dest(outputDir + 'js'));
});

gulp.task('css', function() {
  return gulp
        .src(cssSources)
        .pipe(gulp.dest(outputDir + '/css'));
});