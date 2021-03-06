const gulp = require("gulp");
const webpack = require("webpack-stream");
const nodemon = require("nodemon");

let run = [0, 0, 0];

const js = () => {
    run[0] == 0 && gulp.watch("./src/js/**", js)

    run[0] = 1;

    return gulp.src("./src/js/main.jsx")
        .pipe(webpack(require("./webpack.config.js")))
        .pipe(gulp.dest("./public/js"))
};

const html = () => {
    run[1] == 0 && gulp.watch("./src/index.html", html);

    run[1] = 1;

    return gulp.src("./src/index.html")
        .pipe(gulp.dest("./public"))
};

const css = () => {
    run[1] == 0 && gulp.watch("./src/css/**", html);

    run[1] = 1;

    return gulp.src("./src/css/**")
        .pipe(gulp.dest("./public/css"))
};

const server = () => {
    nodemon({
        script: "./server.js",
        ext: "js html",
        env: { NODE_ENV: "development" }
    })
};

module.exports.default = gulp.parallel(js, html, css, server);