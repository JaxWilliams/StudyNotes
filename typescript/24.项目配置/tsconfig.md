与其他构建工具整合
## gulp
`npm install gulp-typescript`
```javascript
var gulp = require('gulp');
var ts = require('gulp-typescript');
gulp.task('default', function() {
    var tsResult = gulp.src("src/*.ts")
        .pipe(ts({
            noImplicitAny: true,
            out: "output.js"
        }));
    return tsResult.js.pupe(gulp.dest('built/local'));
});
```
## webpack
`npm install ts-loader --save-dev`
```javascript
module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js"
    },
    resolve: {
        extensions: ["",".webpack.js",".web.js",".ts",".tsx",".js"]
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    }
}
```
