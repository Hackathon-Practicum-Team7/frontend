<h1 align="center">Practicum Project</h1>

Проект представляет собой сервис для HR (рекрутеров), на котором они могут найти подходящего кандидата на свои вакансии из общего числа студентов Практикума.

Проект создан @snurnisyan, @dariarus и @elana-tollu во время участия в хакатоне Яндекс Практикум.

Проект создан совместно в команде с PM, дизайнерами и backend-разработчиками.

------

<h3 align="center">Реализованные страницы</h2>

1. Авторизация пользователя
2. Фильтрация поиска кандидата
3. Результат поиска в виде таблицы
4. Страницы профиля кандидата


------

<h3 align="center">Основные технологии проекта</h2>

1. **HTML и SCSS.** Соблюдается корректная семантика тегов и продвинутая стилизация.
2. **React (React-router v.6).** Компонентная сборка, авторизация, роутинг.
3. **Redux Toolkit (+ Thunk).** Используется хранилище Redux для хранения данных с API и работы с глобальным контекстом.
4. **Typescript.** Весь код протипизован, в т.ч. и Redux хранилище.
5. **React Hook Form, yup.** Для работы с формами и их валидацией.
6. **Material UI**. Для работы с готовыми UI компонентами.


------

<h3 align="center">Локальный запуск проекта</h2>

Проект создан с помощью **<a href="https://vitejs.dev/">Vite</a>**

Проект запускается локально по адресу http://localhost:5173/ путем клонирования данного репозитория и последовательного запуска команд в терминале.

Предварительно должны быть установлены программы Git, NodeJS и менеджер пакетов npm.


```
// clone repo
git clone https://github.com/Hackathon-Practicum-Team7/frontend

// go to dir
cd frontend

// install dependencies
npm install

// build project
npm run build

// run dev mode
npm run dev

// run preview Vite mode
npm run preview


```

------

<h3 align="center">Деплой</h2>

Продакшн-версия доступна по ссылке: https://seventeam-hakaton.sytes.net/

Данные для авторизации:

_Логин_: recruiter1@example.com

_Пароль_: MnTre328
