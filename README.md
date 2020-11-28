# Дипломное работа к курсу «Продвинутый JavaScript в браузере».
---

## Задача

Ключевая идея - создать бота, который предназначен как для хранения информации и других сервисов.

## Ключевые функции

Функции разбиты на две категории:
1. Обязательные
1. Дополнительные

### Обязательные функции

* Сохранение в истории ссылок и текстовых сообщений
* Ссылки (то, что начинается с `http://` или `https://`) кликабельны и отображаться как ссылки
* Сохранение в истории изображений, видео и аудио (как файлов) - через Drag & Drop и через иконку загрузки. Максимальный объем загружаемого файла 700 MB (734003200 Byte)
* Скачивание файлов (на компьютер пользователя)
* Ленивая подгрузка: сначала подгружаются последние 10 сообщений, при прокрутке вверх подгружаются следующие 10 и т.д.

![](https://raw.githubusercontent.com/Evgeniy-Varlamov/test/master/pic/01.png)

![](https://raw.githubusercontent.com/Evgeniy-Varlamov/test/master/pic/02.png)

### Дополнительные функции

1. Запись видео и аудио (используя API браузера)

![](https://raw.githubusercontent.com/Evgeniy-Varlamov/ahj-diplom/master/pic/03.png)

![](https://raw.githubusercontent.com/Evgeniy-Varlamov/ahj-diplom/master/pic/04.png)

2. Отправка геолокации
3. Воспроизведение видео/аудио (используя API браузера)

![](https://raw.githubusercontent.com/Evgeniy-Varlamov/ahj-diplom/master/pic/05.png)

4. Закрепление (pin) сообщений, закреплять можно только одно сообщение (прикрепляется к верхней части страницы):

![](https://raw.githubusercontent.com/Evgeniy-Varlamov/ahj-diplom/master/pic/06.png)

![](https://raw.githubusercontent.com/Evgeniy-Varlamov/ahj-diplom/master/pic/07.png)

5. Поддержка смайликов (emoji)

![](https://raw.githubusercontent.com/Evgeniy-Varlamov/ahj-diplom/master/pic/08.png)

## Ссылки

[GithubPage](https://evgeniy-varlamov.github.io/ahj-diplom/)
[![Build status](https://ci.appveyor.com/api/projects/status/88112y4ahbhy4jm5?svg=true)](https://ci.appveyor.com/project/Evgeniy-Varlamov/ahj-diplom)  
[BackEnd](https://github.com/Evgeniy-Varlamov/ahj-diplom_back)  
[Deployed BackEnd](https://ahj-diplom.herokuapp.com)  
[Дипломное задание](https://github.com/netology-code/ahj-diploma)  

