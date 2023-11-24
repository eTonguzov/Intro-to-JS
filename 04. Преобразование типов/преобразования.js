/*Строковое преобразование */
let value = true; // есть переменная value 
//alert(typeof value); // тип boolean
value = String(value); // теперь это строка
console.log(typeof value); // string
/*---------------------- */
/*Численное преобразование */
console.log('5' / '2');//строки преобразуются в числа

let value2 = '123'
console.log(typeof value2) //String

value2 = Number(value2); //становится числом
console.log(typeof value2);//number