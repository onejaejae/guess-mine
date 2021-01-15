import sass from "gulp-sass";
import gulp from "gulp";
import autoprefixer from "gulp-autoprefixer";
import csso from "gulp-csso";
import del from "del";
import babelify from "babelify";
import browserify from "gulp-browserify";

sass.compiler = require("node-sass");

const path = {
  styles: {
    src: "assets/scss/styles.scss",
    dest: "src/static/styles",
    watch: "assets/scss/**/*.scss",
  },
  js: {
    src: "assets/js/main.js",
    dest: "src/static/js",
    watch: "assets/js/**/*.js",
  },
};

// eslint-disable-next-line import/prefer-default-export
const styles = () => {
  return gulp
    .src(path.styles.src)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(csso())
    .pipe(gulp.dest(path.styles.dest));
};

const js = () =>
  gulp
    .src(path.js.src)
    .pipe(
      browserify({
        transform: [
          babelify.configure({
            presets: ["@babel/preset-env"],
          }),
        ],
      })
    )
    .pipe(gulp.dest(path.js.dest));

const clean = () => del(["src/static"]);

const watchFiles = () => {
  gulp.watch(path.styles.watch, styles);
  gulp.watch(path.js.watch, js);
};

const dev = gulp.series([clean, styles, js, watchFiles]);

export const built = gulp.series(clean, styles, js);

export default dev;
