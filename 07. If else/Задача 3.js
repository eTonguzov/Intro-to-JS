/*Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.
Предполагается, что пользователь вводит только числа.

Демо в новом окне*/

let a = prompt("Введите число")
let b = (a > 0) ? "1" : (a < 0) ? ("-1") : "0";
/*let b;
if(a > 0){
    b = "1";
} else if(a < 0){
    b = "-1";
} else b = "0";*/

alert(b)
