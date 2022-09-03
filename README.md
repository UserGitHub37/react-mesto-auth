# Проект: react-mesto-auth

### Сервис Mesto: интерактивная страница, с регистрацией, авторизацией и адаптивной версткой. На страницу можно добавлять фотографии, удалять их и ставить лайки.


Проект "react-mesto-auth" создан на основе проекта ["mesto-react"](https://github.com/UserGitHub37/mesto-react/blob/main/README.md)

В проекте "react-mesto-auth" добавлен новый функционал:
  * авторизация, регистрация и проверка токена (работают через сервис `https://auth.nomoreparties.co`)
  * если пользователь не авторизован то происходит переход на страницу авторизации
  * если пользователь не зарегистрирован, то он может перейти по ссылке регистрации и зарегистрироваться
  * если регистрация прошла успешно или не успешно, то появляется всплывающее окно с соответствующей информацией
  * при успешном входе пользователь попадает на главную страницу
  * на мобильных разрешениях у залогиненых пользователей добавленно меню, открывающееся кликом по анимированной "бургерной" кнопке
  * сайт доступен по адресу https://usergithub37.github.io/react-mesto-auth/index.html


  + [Ссылка на README.md проекта "mesto-react"](https://github.com/UserGitHub37/mesto-react/blob/main/README.md)
  + [Чеклист для самопроверки. 12 Спринт.](https://code.s3.yandex.net/web-developer/checklists-pdf/new-program/checklist-12.pdf)


Планируемые доработки проекта:
* добавить в проект валидацию форм

* * *

#### Краткая история развития проекта "Mesto":
- ["mesto"](https://github.com/UserGitHub37/mesto), написан на чистом JavaScript с использованием сборщика модулей Webpack

- ["mesto-react"](https://github.com/UserGitHub37/mesto-react), переписан с чистого JavaScript на React

- ["react-mesto-auth"](https://github.com/UserGitHub37/react-mesto-auth) добавлено создание пользователей, их аутентификация и авторизация

- ["express-mesto-gha"](https://github.com/UserGitHub37/express-mesto-gha) написан backend для проекта "mesto"

- ["react-mesto-api-full"](https://github.com/UserGitHub37/react-mesto-api-full) fullstack приложение, включающее фронтенд и бэкенд части приложения

По мере развития проект обрастал дополнительным функционалом, подробное описание которого можно посмотреть в README.md соответствующих проектов.

* * *

#### Установка и запуск приложения на локальной машине:

1. Клонирование репозитория
```bash
git clone https://github.com/UserGitHub37/react-mesto-auth
```

2. Установка зависимостей
```bash
npm install
```

3. Запустите dev-сервер фронтенда
```bash
npm start
```

##### Production-сборка проекта в папке build
```bash
npm run build
```
