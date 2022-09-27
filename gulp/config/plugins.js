import replace from "gulp-replace" // поиск и замена
import plumber from "gulp-plumber" // Обрабока ошибок
import notify from "gulp-notify" // Сообщения (подсказки)
import browsersync from "browser-sync"
import newer from "gulp-newer"  //проврека обновления картинки
import ifPlugin from "gulp-if"  //условное вветвление

// экспортирем объект
export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browsersync: browsersync,
  newer: newer,
  if: ifPlugin
}