'use strict';

const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = 'm4ngo1zh4ackz0r';
const userLogin = prompt('Введите Ваш логин');
if (userLogin === ADMIN_LOGIN) {
  const userPass = prompt('Введите ваш пароль');

  if (userPass === ADMIN_PASSWORD) {
    alert('Добро пожаловать!')
  } else if (userPass === null) {
    alert('Отменено пользователем!');
  } else if (userPass != 1)
    alert('Доступ запрещено!');
} else if (userLogin === null) {
  alert('Отменено пользователем!');
} else if (userLogin != 1)
  alert('Доступ запрещено!');
