# jobinterview
В папке work находится dev версия проекта
Для запуска gulp необходимо
поставить его сначало глобально:
$ npm install --global gulp-cli
а потом локально в проекте:
$ npm install --save-dev gulp

Я настроил gulp так что он автоматически посылал запрос на сервер и обновлял страницу, так же gulp переводит jade в html, делает конкатенацию css, и переводит в готовый файл минифицированный формат.

В папке html находится release версия проекта
