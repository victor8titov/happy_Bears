# Happy Bears

[DEMO](http://victor8titov.ml/happybears)

Тестовое задание для компании [RU_PORT](http://ruport.ru/)

## Описание архитектуры

Приложение построена на основе классов Component View.

Они позволяют разделить логику работу а также упростить работу с DOM. В частности класс Component  немного похож на класс Component в фреймворке React, задача у него схожая. Описать компонент, его обработчики и зависимые компоненты, возможность передавать свойства дочерним компонентам, метод класса `render` конвертирует представление компонента в DOM объект.

В классе Component реализован механизм передачи свойств дочерним компонентам через свойство `props`, реализован метод жизненного цикла `ComponentDidMount` вызывающиеся после помещения всей цепочки компонентов в DOM. С помощью данного метода в компоненте Card реализована асинхронная загрузка картинок.

Класс View нужен для превращения цепочки компонентов в их DOM представление и помещение их в DOM браузера.

### Ход выплнения.
* Сначала ждем события загрузки документа. 
* С помощью метода `pipeline` класса View создаем каждый компонент и помещаем его в контейнер.
* Асинхронный запрос на сервер для получения данных.
* После ответа перестраиваем только часть дерева, отдавая компонентам данные.

После построения компонентов DOM дерево больше не обновляется. Все данные поступившие в приложение децентрализованы, т.е хранянтся в каждом компоненте в атрибуте `data`. В приложении нет общего хранилища. 


## Сборка webpack 
Команды: 
* `npm run dev`
	Сборка проекта без минимизации js файлов.
* `npm run build`
	Сборка проекта в папке dist с минимизацией js,css файлов.
* `npm run start`
	Запуск сервера для представления и разработки.

