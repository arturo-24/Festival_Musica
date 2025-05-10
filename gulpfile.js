import { src, dest, watch } from "gulp";
import * as dartSass from "sass";
import gulpSass from "gulp-sass";

const sass = gulpSass(dartSass);

// Tarea para compilar SCSS
export function css( done ) {
    return src("src/scss/app.scss")
        .pipe( sass().on("error", sass.logError) )
        .pipe( dest("build/css") );
}

// Tarea para escuchar cambios
export function dev() {
    watch("src/scss/**/*.scss", css); 
}