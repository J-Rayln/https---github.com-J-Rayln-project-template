const { src, dest, watch, series } = require('gulp');

// styles   
const scss = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cssMinify = require('gulp-clean-css');

// scripts
const jsMinify = require('gulp-terser');

// utility
const fileSync = require('gulp-file-sync');
const browserSync = require('browser-sync').create();

// source paths
var paths = {
    css: {
        src: 'app/src/scss/**/*.scss',
        dest: 'app/dist/css',
        view: 'app/src/_view'
    },
    js: {
        src: 'app/src/js/**/*.js',
        dest: 'app/dist/js'
    },
    html: {
        src: 'app/src/*.html',
        dest: 'app/dist'
    },
    img: {
        src: 'app/src/img',
        dest: 'app/dist/img'
    }
}

// outputs final CSS for distribution
function stylesTask() {
    return src( paths.css.src, { sourcemaps: true } )
        .pipe ( scss() )
        .on( 'error', scss.logError )
        .pipe( autoprefixer('last 2 versions') )
        .pipe( cssMinify() )
        .pipe( dest(paths.css.dest, { sourcemaps: '.'}) )
}

// outputs an uncompressed compiled CSS
// it's easier to referrence during development
function stylesViewTask() {
    return src( paths.css.src )
        .pipe( scss() )
        .pipe( autoprefixer('last 2 versions') )
        .pipe( dest(paths.css.view) )
}

// outputs final JavaScript for distribution
function scriptsTask() {
    return src( paths.js.src )
        .pipe( jsMinify() )
        .pipe( dest(paths.js.dest) )
}

// copy HTML files to dist folder
function htmlTask() {
    return src( paths.html.src )
        .pipe( dest(paths.html.dest) )
}

// syncs images folder to dist
function imagesTask(cb) {
    fileSync(paths.img.src, paths.img.dest, {recursive: false});
    cb();
}

// serves up the browsersync server
function browserSyncServe(cb) {
    browserSync.init({
        server: {
            baseDir: './app/dist'
        }
    });
    cb();
}

// reloads browsersync server
function browserSyncReload(cb) {
    browserSync.reload()
    cb();
}

// watch task
function watchTask() {
    watch(
        [paths.css.src, paths.js.src, paths.html.src, paths.img.src],
        series(stylesTask, stylesViewTask, scriptsTask, htmlTask, imagesTask, browserSyncReload)
    );
}

// default Gulp task
exports.default = series(
    stylesTask,
    stylesViewTask,
    scriptsTask,
    htmlTask,
    imagesTask,
    browserSyncServe,
    watchTask
);