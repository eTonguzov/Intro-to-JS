/*Перепишите if..else с использованием нескольких операторов '?'.

Для читаемости рекомендуется разбить код на несколько строк.*/

let message;
let login = "Сотрудник";
(login == "Сотрудник")? message = "Привет" : (login == "Директор")? message = "Здравствуйте" :
 (login == "")? message = "Нет логина" : message = "";
 console.log(message);

/*if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}*/