/*Какой результат будет у выражений ниже?*/

let a = "" + 1 + 0 //string '10' если + то приводит к string
console.log(a, typeof a);

let b = "" - 1 + 0 //int -1' так как - то в этом случае к строке не приводит
console.log(b, typeof b);

let c = true + false // так как тут мы исполбзуем сложение JS пытается перевести каждое значение в число
console.log(c, typeof c);//1+0=1, number

let d = 6 / "3" // int 2
console.log(d, typeof d);

let e = "2" * "3" // int 6
console.log(e, typeof e);

let  f = 4 + 5 + "px" // string '9px'
console.log(f, typeof f);

let g = "$" + 4 + 5 // string $45
console.log(g, typeof g);

let h = "4" - 2 //int 2
console.log(h, typeof h);

let i = "4px" - 2;
console.log(i, typeof i);// здесь JS пытается перевести '4px' в чилос но получается Not a Number NaN Number(NaN).
// В итоге Nan - 2 = NaN, тип данных NaN - number

let y = "  -9  " + 5;
console.log(y, typeof y)//' -9 5' string

let z = "  -9  " - 5 //-14 number
console.log(z, typeof z)

let p = null + 1; //1 number
console.log(p, typeof p); // null преобразуется в 0

let w = undefined + 1 // undifined становится NaN при преобразовании
console.log(w, typeof w)

let m = " \t \n" - 2 // Пробельные символы, такие как \t и \n, по краям строки игнорируются при преобразовании в число, так что строка 
//" \t \n", аналогично пустой строке, становится 0 после численного преобразования.
console.log(m, typeof m)