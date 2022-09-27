import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

import cleanCss from 'gulp-clean-css';  //Сжатие css файла
import webpcss from 'gulp-webpcss'; // вывод webp изображений
import autoprefixer from 'gulp-autoprefixer'; // добавление венарных префикосов
import groupCssMediaQueries from 'gulp-group-css-media-queries';// Групировка медиа запросов


const sass = gulpSass(dartSass);

export const scss = ()=>{
    return app.gulp.src(app.path.src.scss, {sourcemaps: app.isDev})
      .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
          title: "SCSS",
          message: "Error <%= error.message %>"
        })
      ))
      .pipe(app.plugins.replace(/@img\//g,'../img/'))
      .pipe(sass({
        outputStyle:'expanded'
      }))
      .pipe(
          app.plugins.if(
          app.isBuild,
          groupCssMediaQueries()
        )
      )
      .pipe(
                  app.plugins.if(
          app.isBuild,
                  webpcss({
          webpClass:".webp",
          nowebpClass: ".no-webp"
        })
        )

      )
      .pipe(
        app.plugins.if(
          app.isBuild,
           autoprefixer({
          grid: true,
          overrideBrowserlist: ["last 3 versions"],
          cascade: true
        })
        )

      )
      // расскоментроваьесли нужен не сжатыйй дубль файла стиилей
      .pipe(app.gulp.dest(app.path.build.css))
      .pipe(
                  app.plugins.if(
          app.isBuild,
          cleanCss())
        )
      .pipe(rename({
        extname: ".min.css"
      }))
      .pipe(app.gulp.dest(app.path.build.css))
      .pipe(app.plugins.browsersync.stream());
}