var gulp = require('gulp');
var concat = require('gulp-concat');

var outputDir = 'client/';

var angularSources = [
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
  'node_modules/angular2/bundles/router.dev.js',
  'node_modules/angular2/bundles/router.dev.map',
  'node_modules/angular2/bundles/http.dev.js',
  'node_modules/angular2/bundles/http.dev.map',
];

var jsSources = [
    'node_modules/jquery/dist/jquery.min.js',
    'semantic/dist/semantic.min.js'
]

var cssSources = [
  'semantic/dist/semantic.min.css',
  'semantic/dist/themes/default/*'
]

gulp.task('angular', function() {
    return gulp
        .src(jsSources, {base: 'node_modules'})
        .pipe(gulp.dest(outputDir + 'js'));
});

gulp.task('js', function() {
    return gulp
        .src(jsSources)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(outputDir + 'js'));
});

gulp.task('css', function() {
  return gulp
        .src(cssSources)
        .pipe(gulp.dest(outputDir + '/css'));
});


gulp.task('default', ['angular','js', 'css']);